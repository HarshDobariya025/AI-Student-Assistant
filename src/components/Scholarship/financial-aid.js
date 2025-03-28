export const financialAidData = {
    categories: [
      {
        id: 1,
        name: "Federal Aid",
        description:
          "Government-funded financial assistance programs available to eligible students pursuing technical education.",
      },
      {
        id: 2,
        name: "State Aid",
        description: "Financial assistance programs funded by state governments to support students in technical fields.",
      },
      {
        id: 3,
        name: "Institutional Aid",
        description:
          "Financial assistance offered directly by educational institutions to support students in technical programs.",
      },
      {
        id: 4,
        name: "Private Aid",
        description:
          "Financial assistance from private organizations, foundations, and corporations for technical education.",
      },
    ],
    programs: [
      {
        id: 1,
        name: "Federal Pell Grant",
        type: "Grant",
        description: "A federal grant program providing need-based aid to low-income undergraduate students.",
        amount: "Up to $7,395 per academic year",
        eligibility: "Based on financial need, determined by FAFSA application",
        repayment: "No repayment required",
      },
      {
        id: 2,
        name: "Federal Direct Subsidized Loan",
        type: "Loan",
        description: "A need-based federal loan where the government pays the interest while you're in school.",
        amount: "Up to $5,500 per year depending on grade level",
        eligibility: "Undergraduate students with financial need",
        repayment: "Begins 6 months after graduation or dropping below half-time enrollment",
      },
      {
        id: 3,
        name: "Federal Work-Study",
        type: "Work-Study",
        description: "A program that provides part-time jobs for undergraduate students with financial need.",
        amount: "Varies based on hours worked and wage rate",
        eligibility: "Based on financial need and availability of funds",
        repayment: "No repayment required; students earn money through employment",
      },
      {
        id: 4,
        name: "Technical Excellence Scholarship",
        type: "Grant",
        description: "An institutional grant for students demonstrating exceptional aptitude in technical fields.",
        amount: "Up to $5,000 per academic year",
        eligibility: "Based on academic merit and program of study",
        repayment: "No repayment required",
      },
      {
        id: 5,
        name: "Industry Partnership Loan",
        type: "Loan",
        description: "A loan program sponsored by industry partners with favorable terms for technical students.",
        amount: "Up to $10,000 per academic year",
        eligibility: "Students in specific technical programs with industry demand",
        repayment:
          "Begins after graduation with potential for partial loan forgiveness with employment at partner companies",
      },
    ],
    applicationSteps: [
      {
        title: "Complete the FAFSA",
        description:
          "Fill out the Free Application for Federal Student Aid (FAFSA) to determine eligibility for federal and state financial aid programs.",
      },
      {
        title: "Submit Additional Documentation",
        description:
          "Provide any requested documentation to verify information on your FAFSA and institutional aid applications.",
      },
      {
        title: "Review Your Financial Aid Offer",
        description: "Carefully review your financial aid package and accept or decline each type of aid offered.",
      },
      {
        title: "Complete Entrance Counseling",
        description:
          "If accepting loans, complete required entrance counseling to understand your rights and responsibilities.",
      },
      {
        title: "Sign Required Agreements",
        description: "Sign any required promissory notes or agreements for the financial aid you've accepted.",
      },
    ],
    resources: [
      {
        id: 1,
        title: "Financial Aid Office",
        description: "Visit our office for personalized assistance with financial aid applications and questions.",
        link: "#financial-aid-office",
      },
      {
        id: 2,
        title: "FAFSA Website",
        description: "The official site for completing the Free Application for Federal Student Aid.",
        link: "https://studentaid.gov/h/apply-for-aid/fafsa",
      },
      {
        id: 3,
        title: "Scholarship Database",
        description: "Search our comprehensive database of scholarships for technical students.",
        link: "#scholarship-database",
      },
      {
        id: 4,
        title: "Financial Literacy Workshops",
        description: "Attend workshops on budgeting, loan management, and financial planning for students.",
        link: "#financial-workshops",
      },
    ],
  }
  
  