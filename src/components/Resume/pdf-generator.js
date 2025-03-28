import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

export const generatePDF = async (elementId, filename = "resume.pdf") => {
  const element = document.getElementById(elementId)
  if (!element) {
    throw new Error(`Element with ID "${elementId}" not found`)
  }

  try {
    // Create a canvas from the element
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    })

    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    // Calculate dimensions to fit the content properly
    const imgWidth = 210 // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // Add the image to the PDF
    const imgData = canvas.toDataURL("image/png")
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)

    // Save the PDF
    pdf.save(filename)

    return true
  } catch (error) {
    console.error("Error generating PDF:", error)
    throw error
  }
}

