import { financialAidData } from "./financial-aid"
import { ArrowRight } from "lucide-react"
import "./FinancialAidPrograms.css"

const FinancialAidPrograms = () => {
  return (
    <div className="financial-aid">
      <div className="financial-aid-header">
        <h2>Financial Aid Programs</h2>
        <p>Explore financial assistance options for technical education</p>
      </div>

      <div className="aid-categories">
        {financialAidData.categories.map((category) => (
          <div key={category.id} className="aid-category">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      <div className="aid-programs">
        <h3>Available Programs</h3>

        {financialAidData.programs.map((program) => (
          <div key={program.id} className="aid-program">
            <div className="program-header">
              <h4>{program.name}</h4>
              <span className={`program-type ${program.type.toLowerCase()}`}>{program.type}</span>
            </div>

            <p className="program-description">{program.description}</p>

            <div className="program-details">
              {program.amount && (
                <div className="program-detail">
                  <strong>Amount:</strong> {program.amount}
                </div>
              )}

              {program.eligibility && (
                <div className="program-detail">
                  <strong>Eligibility:</strong> {program.eligibility}
                </div>
              )}

              {program.repayment && (
                <div className="program-detail">
                  <strong>Repayment:</strong> {program.repayment}
                </div>
              )}
            </div>

            <a href="#" className="program-link">
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>

      <div className="aid-application">
        <h3>How to Apply for Financial Aid</h3>
        <ol className="application-steps">
          {financialAidData.applicationSteps.map((step, index) => (
            <li key={index} className="application-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="aid-resources">
        <h3>Additional Resources</h3>
        <div className="resources-grid">
          {financialAidData.resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <h4>{resource.title}</h4>
              <p>{resource.description}</p>
              <a href={resource.link} className="resource-link">
                Visit Resource <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FinancialAidPrograms

