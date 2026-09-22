export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  icon: string;
  subservices: string[];
  note: string;
};

export const services: Service[] = [
  {
    slug: "property-management",
    number: "01",
    title: "Property Management",
    shortTitle: "Property Management",
    description:
      "India-side administration, inspection, maintenance and tenancy-related coordination for immovable property owned by NRIs.",
    intro:
      "A structured India-side property management framework for NRIs who are unable to remain physically present for routine inspections, tenant-related matters, maintenance requirements, documentation and local follow-up.",
    icon: "Building2",
    subservices: [
      "Tenant identification and preliminary coordination",
      "Tenancy documentation and agreement coordination",
      "Tenant communication and issue follow-up",
      "Rent payment follow-up and payment-status coordination",
      "Move-in and move-out inspection coordination",
      "Routine maintenance and repair coordination",
      "Plumbing, electrical and civil repair coordination",
      "Seepage, leakage and structural-condition observations",
      "Utility, property-tax and mortgage-related payment coordination",
      "Vacant property inspection and periodic oversight",
      "Physical property inspection and condition reporting",
      "Photographic, video and periodic property reports",
    ],
    note:
      "The scope of property management and coordination is determined on the basis of the property, the owner's instructions and the specific requirements agreed before commencement of services.",
  },

  {
    slug: "transactions-advisory",
    number: "02",
    title: "Transactions & Advisory",
    shortTitle: "Transactions & Advisory",
    description:
      "Structured coordination and documentation support in connection with the purchase, sale and transfer of immovable property in India.",
    intro:
      "Property transactions involving NRIs may require coordination among owners, purchasers, sellers, legal professionals, tax professionals, banks and registration authorities. The service is structured to facilitate the India-side transaction process and related documentation.",
    icon: "ArrowLeftRight",
    subservices: [
      "Property sale and purchase coordination",
      "Pre-transaction document collection and review coordination",
      "Property due diligence and title-document coordination",
      "Ownership and transaction-record verification coordination",
      "Buyer and seller communication and negotiation coordination",
      "Power of Attorney documentation coordination",
      "Sale deed and transaction-documentation coordination",
      "Registration and execution-related coordination",
      "Gift deed and relinquishment deed documentation coordination",
      "Family settlement documentation coordination",
      "Will drafting and registration coordination",
      "NRE / NRO banking and repatriation documentation coordination",
    ],
    note:
      "Legal, taxation, banking and financial implications are assessed on the facts and circumstances of the relevant transaction and, where required, coordinated with appropriately qualified professionals and applicable authorities.",
  },

  {
    slug: "legal-title-support",
    number: "03",
    title: "Legal & Title Support",
    shortTitle: "Legal & Title Support",
    description:
      "Legal and title-related assistance concerning immovable property, ownership, possession, succession, documentation and property disputes.",
    intro:
      "Property-related disputes and title matters may involve ownership records, succession, possession, boundaries, agreements and historical documentation. The relevant documents and facts can be organised and coordinated for appropriate legal assessment and further action.",
    icon: "Scale",
    subservices: [
      "Property title examination and title-related disputes",
      "Sale, purchase and agreement-related disputes",
      "Inheritance and succession matters",
      "Partition and family property matters",
      "Possession and eviction-related matters",
      "Encroachment and boundary disputes",
      "Property registration and documentation assistance",
      "Title verification and property due diligence",
      "Legal document review and professional coordination",
      "Power of Attorney and authorised representation coordination",
      "Coordination with relevant government and local authorities",
      "Will drafting and registration assistance",
    ],
    note:
      "Legal advice, strategy, proceedings and representation are determined by the specific facts, applicable law, jurisdiction and professional engagement required for the matter.",
  },

  {
    slug: "nri-taxation-support",
    number: "04",
    title: "NRI Taxation Support",
    shortTitle: "NRI Taxation",
    description:
      "Coordination and documentation support concerning India-side taxation, TDS, capital gains and compliance requirements relevant to NRI property transactions.",
    intro:
      "Ownership, rental income and transfer of immovable property in India may give rise to taxation, withholding and compliance requirements. Relevant information and documentation can be organised and coordinated with qualified tax professionals.",
    icon: "ReceiptText",
    subservices: [
      "Tax implications relating to sale of immovable property",
      "Capital gains documentation and professional coordination",
      "Tax Deduction at Source (TDS) coordination",
      "Lower or Nil Deduction Certificate (LDC) coordination",
      "Rental-income documentation and tax coordination",
      "Tax records and transaction-document organisation",
      "Income-tax filing and compliance coordination",
      "Chartered Accountant and tax-professional coordination",
      "Tax-related clarification and documentation follow-up",
      "Property-sale proceeds and repatriation documentation coordination",
    ],
    note:
      "Tax liability, applicable rates, deductions, exemptions, TDS requirements and filing obligations depend on the facts of the transaction and the law applicable at the relevant time. Specific tax advice is coordinated with appropriately qualified tax professionals.",
  },

  {
    slug: "banking-fund-management",
    number: "05",
    title: "Banking & Fund Management Assistance",
    shortTitle: "Banking & Funds",
    description:
      "India-side coordination and documentation assistance concerning NRE/NRO banking, property-linked financial matters, claims and eligible fund transfers.",
    intro:
      "NRIs may require India-side assistance with banking documentation, account-related matters, property-linked loans, deceased-holder claims, unclaimed financial assets and eligible repatriation or fund-transfer requirements.",
    icon: "Landmark",
    subservices: [
      "NRE / NRO account-related documentation and coordination",
      "Banking documentation and institutional follow-up",
      "Property loan and mortgage-related coordination",
      "Deceased account-holder claim documentation",
      "Unclaimed dividend and financial-asset claim coordination",
      "Investor Education and Protection Fund (IEPF) claim coordination",
      "Lost or duplicate share-certificate documentation",
      "Dematerialisation and transmission of securities coordination",
      "Unlisted-share documentation and transfer coordination",
      "Eligible fund-transfer and repatriation documentation coordination",
    ],
    note:
      "Banking transactions, account access, claims, securities transfers and repatriation remain subject to the requirements of the relevant institution, applicable law and regulatory framework.",
  },

  {
    slug: "inspection-valuation-investment",
    number: "06",
    title: "Inspection, Valuation & Investment Assistance",
    shortTitle: "Inspection & Due Diligence",
    description:
      "Physical inspection, property information, valuation coordination and investment-related assistance for informed India-side decision-making.",
    intro:
      "Before acquiring, disposing of, managing or otherwise taking a decision concerning property or an investment, NRIs may require reliable India-side information, physical verification, documentation review and professional coordination.",
    icon: "ClipboardCheck",
    subservices: [
      "Physical property inspection and site verification",
      "Ownership and title-history document review coordination",
      "Property-record and certified-record verification coordination",
      "Possession and occupancy verification",
      "Encumbrance and document-gap review",
      "Boundary and site-condition observations",
      "Property valuation and market-assessment coordination",
      "Inspection reports and photographic documentation",
      "Property-related risk identification and reporting",
      "Investment information and professional coordination",
      "Location, surrounding development and market-factor assessment",
      "Coordination with appropriately authorised financial professionals where required",
    ],
    note:
      "Inspection, information and coordination services do not substitute for independent legal, tax, valuation or investment advice where such professional advice is required. Investment-related services remain subject to applicable regulatory requirements.",
  },
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, Service>;