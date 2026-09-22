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
      "India-side administration, inspection, maintenance and tenancy-related support for immovable property owned by NRIs.",
    intro:
      "A structured India-side property management framework for NRIs who are unable to remain physically present for routine inspections, tenant-related requirements, maintenance, documentation and local oversight.",
    icon: "Building2",
    subservices: [
      "Tenant identification and preliminary assistance",
      "Tenancy documentation and agreement assistance",
      "Tenant communication and issue resolution",
      "Rent collection and payment-status follow-up",
      "Move-in and move-out inspection arrangements",
      "Routine maintenance and repair management",
      "Plumbing, electrical and civil repair assistance",
      "Seepage, leakage and structural-condition assessment",
      "Utility, property-tax and mortgage-related payment assistance",
      "Vacant property inspection and periodic oversight",
      "Physical property inspection and condition reporting",
      "Photographic, video and periodic property reports",
    ],
    note:
      "The scope of property management is determined on the basis of the property, the owner's instructions and the specific requirements agreed before commencement of services.",
  },

  {
    slug: "transactions-advisory",
    number: "02",
    title: "Transactions & Advisory",
    shortTitle: "Transactions & Advisory",
    description:
      "Structured assistance and documentation support in connection with the purchase, sale and transfer of immovable property in India.",
    intro:
      "Property transactions involving NRIs may require communication among owners, purchasers, sellers, legal professionals, tax professionals, banks and registration authorities. The service is structured to facilitate the India-side transaction process and related documentation.",
    icon: "ArrowLeftRight",
    subservices: [
      "Property sale and purchase assistance",
      "Pre-transaction document collection and review",
      "Property due diligence and title-document review",
      "Ownership and transaction-record verification",
      "Buyer and seller communication and negotiation assistance",
      "Power of Attorney documentation assistance",
      "Sale deed and transaction-document preparation support",
      "Registration and execution-related assistance",
      "Gift deed and relinquishment deed documentation",
      "Family settlement documentation assistance",
      "Will drafting and registration assistance",
      "NRE / NRO banking and repatriation documentation assistance",
    ],
    note:
      "Legal, taxation, banking and financial implications are assessed on the facts and circumstances of the relevant transaction and, where required, referred to appropriately qualified professionals and applicable authorities.",
  },

  {
    slug: "legal-title-support",
    number: "03",
    title: "Legal & Title Support",
    shortTitle: "Legal & Title Support",
    description:
      "Legal and title-related assistance concerning immovable property, ownership, possession, succession, documentation and property disputes.",
    intro:
      "Property-related disputes and title matters may involve ownership records, succession, possession, boundaries, agreements and historical documentation. The relevant documents and facts can be organised for appropriate legal assessment and further action.",
    icon: "Scale",
    subservices: [
      "Property title examination and title-related disputes",
      "Sale, purchase and agreement-related disputes",
      "Inheritance and succession matters",
      "Partition and family property matters",
      "Possession and eviction-related assistance",
      "Encroachment and boundary disputes",
      "Property registration and documentation assistance",
      "Title verification and property due diligence",
      "Legal document review and professional assistance",
      "Power of Attorney and authorised representation assistance",
      "Liaison with relevant government and local authorities",
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
      "Tax-related documentation and professional assistance concerning India-side taxation, TDS, capital gains and compliance requirements relevant to NRI property transactions.",
    intro:
      "Ownership, rental income and transfer of immovable property in India may give rise to taxation, withholding and compliance requirements. Relevant information and documentation can be organised and referred to qualified tax professionals for appropriate advice.",
    icon: "ReceiptText",
    subservices: [
      "Tax implications relating to sale of immovable property",
      "Capital gains documentation and tax assistance",
      "Tax Deduction at Source (TDS) assistance",
      "Lower or Nil Deduction Certificate (LDC) assistance",
      "Rental-income documentation and tax support",
      "Tax records and transaction-document organisation",
      "Income-tax filing and compliance assistance",
      "Chartered Accountant and tax-professional liaison",
      "Tax-related clarification and documentation support",
      "Property-sale proceeds and repatriation documentation assistance",
    ],
    note:
      "Tax liability, applicable rates, deductions, exemptions, TDS requirements and filing obligations depend on the facts of the transaction and the law applicable at the relevant time. Specific tax advice is referred to appropriately qualified tax professionals.",
  },

  {
    slug: "banking-fund-management",
    number: "05",
    title: "Banking & Fund Management Assistance",
    shortTitle: "Banking & Funds",
    description:
      "India-side banking and documentation assistance concerning NRE/NRO accounts, property-linked financial matters, claims and eligible fund transfers.",
    intro:
      "NRIs may require India-side assistance with banking documentation, account-related requirements, property-linked loans, deceased-holder claims, unclaimed financial assets and eligible repatriation or fund-transfer requirements.",
    icon: "Landmark",
    subservices: [
      "NRE / NRO account-related documentation and assistance",
      "Banking documentation and institutional liaison",
      "Property loan and mortgage-related assistance",
      "Deceased account-holder claim documentation",
      "Unclaimed dividend and financial-asset claim assistance",
      "Investor Education and Protection Fund (IEPF) claim assistance",
      "Lost or duplicate share-certificate documentation",
      "Dematerialisation and transmission of securities assistance",
      "Unlisted-share documentation and transfer assistance",
      "Eligible fund-transfer and repatriation documentation assistance",
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
      "Physical inspection, property assessment, valuation support and investment-related assistance for informed India-side decision-making.",
    intro:
      "Before acquiring, disposing of, managing or otherwise taking a decision concerning property or an investment, NRIs may require reliable India-side information, physical verification, documentation review and professional assistance.",
    icon: "ClipboardCheck",
    subservices: [
      "Physical property inspection and site verification",
      "Ownership and title-history document review",
      "Property-record and certified-record verification",
      "Possession and occupancy verification",
      "Encumbrance and document-gap review",
      "Boundary and site-condition assessment",
      "Property valuation and market-assessment assistance",
      "Inspection reports and photographic documentation",
      "Property-related risk identification and reporting",
      "Investment information and professional assistance",
      "Location, surrounding development and market-factor assessment",
      "Liaison with appropriately authorised financial professionals where required",
    ],
    note:
      "Inspection, information and assistance services do not substitute for independent legal, tax, valuation or investment advice where such professional advice is required. Investment-related services remain subject to applicable regulatory requirements.",
  },
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, Service>;