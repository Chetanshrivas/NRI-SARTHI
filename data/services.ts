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
    description: "Keeping your Indian property maintained, monitored and coordinated while you live abroad.",
    intro: "A structured India-side property layer for owners who cannot be physically present for every visit, repair, tenant interaction or follow-up.",
    icon: "Building2",
    subservices: [
      "Tenant & rent management",
      "Tenant due diligence and documentation",
      "Rent collection and follow-up",
      "Routine maintenance and repair coordination",
      "Seepage, leakage and structural issue coordination",
      "Utility and mortgage payment coordination",
      "Move-in / move-out inspections",
      "Periodic property checks and photo updates"
    ],
    note: "The exact scope is agreed for the property and requirement before work begins."
  },
  {
    slug: "transactions-advisory",
    number: "02",
    title: "Transactions & Advisory",
    shortTitle: "Transactions & Advisory",
    description: "Clear coordination for buying, selling and other property transactions in India.",
    intro: "From preparing the transaction pathway to coordinating documents and local parties, the aim is to make an India-side transaction easier to follow from overseas.",
    icon: "ArrowLeftRight",
    subservices: [
      "Property buying coordination",
      "Property selling coordination",
      "Transaction document review",
      "Power of Attorney coordination",
      "Sale deed documentation coordination",
      "Gift, relinquishment and family-settlement documentation coordination",
      "Buyer / seller communication and follow-up",
      "NRE / NRO and repatriation documentation coordination"
    ],
    note: "Tax, legal and financial matters are evaluated on their facts and coordinated with qualified professionals where required."
  },
  {
    slug: "legal-title-support",
    number: "03",
    title: "Legal & Title Support",
    shortTitle: "Legal & Title Support",
    description: "Professional attention for property disputes, title questions, documentation and related legal coordination.",
    intro: "Property matters can become difficult when records, ownership history, family interests or possession issues are spread across people and documents. The website maps these matters clearly so an NRI can identify the relevant path.",
    icon: "Scale",
    subservices: [
      "Property title disputes",
      "Sale, purchase and agreement disputes",
      "Partition and inheritance matters",
      "Possession and eviction matters",
      "Encroachment and boundary disputes",
      "Registration and documentation support",
      "Title verification and due diligence",
      "Legal document review and coordination"
    ],
    note: "Legal strategy and representation depend on the specific facts, jurisdiction and professional engagement required."
  },
  {
    slug: "nri-taxation-support",
    number: "04",
    title: "NRI Taxation Support",
    shortTitle: "NRI Taxation",
    description: "Coordination around India-side tax documentation and property-related compliance requirements.",
    intro: "Property transactions and rental income can create tax documentation and coordination requirements. NRI Sarthi can help organise the India-side information and coordinate with tax professionals where appropriate.",
    icon: "ReceiptText",
    subservices: [
      "TDS coordination for property transactions",
      "Lower / nil deduction certificate coordination",
      "Capital-gains documentation",
      "Rental-income documentation",
      "Tax record collection and organisation",
      "CA coordination",
      "Sale-proceeds and repatriation documentation coordination"
    ],
    note: "Tax outcomes and rates are not stated as blanket rules here; they depend on the transaction and applicable law at the relevant time."
  },
  {
    slug: "banking-fund-management",
    number: "05",
    title: "Banking & Fund Management Assistance",
    shortTitle: "Banking & Funds",
    description: "Coordination for property-linked banking, funds and documentation matters in India.",
    intro: "When an NRI needs India-side follow-up with banks, documents or asset records, the work can be organised around a clear document and communication trail.",
    icon: "Landmark",
    subservices: [
      "NRE / NRO documentation coordination",
      "Bank documentation and follow-up",
      "Deceased-holder claim documentation",
      "Unclaimed dividend coordination",
      "IEPF claim coordination",
      "Lost or duplicate share certificate documentation",
      "Dematerialisation and transmission coordination",
      "Unlisted-share documentation coordination"
    ],
    note: "Account access, claims and transfers remain subject to the rules and requirements of the relevant institution."
  },
  {
    slug: "inspection-valuation-investment",
    number: "06",
    title: "Inspection, Valuation & Investment Assistance",
    shortTitle: "Inspection & Due Diligence",
    description: "Reliable India-side information before you buy, sell, manage or make an investment decision.",
    intro: "A remote owner often needs reliable information before making a decision. This service is structured around record checks, physical verification and organised reporting.",
    icon: "ClipboardCheck",
    subservices: [
      "Certified record checks",
      "Ownership and title history review",
      "Physical site inspection",
      "Possession and occupancy verification",
      "Encumbrance and document-gap review",
      "Boundary and site observations",
      "Inspection reports and photographs when requested",
      "Investment information and professional coordination"
    ],
    note: "Inspection and information support does not replace independent legal, tax or investment advice where that advice is required."
  }
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<string, Service>;
