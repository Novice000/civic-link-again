type Tdata = {
  title: string;
  description: string;
  duties: string[];
};

type TArm = {
    executive : Tdata[];
    judicial: Tdata[];
    legislative: Tdata[];
}

const federal: TArm = {
  executive: [
    {
      title: "President",
      description:
        "The President is the head of state, head of government, and commander-in-chief of the armed forces. The President is responsible for implementing and enforcing national laws, appointing the cabinet, heads of federal agencies, and federal judges.",
      duties: [
        "National policy implementation",
        "Foreign relations",
        "Signing bills into law",
        "Commander-in-chief of armed forces",
        "Appointing federal officials",
      ],
    },
    {
      title: "Vice President",
      description:
        "The Vice President is the second-highest executive officer and first in the presidential line of succession. The Vice President assists the President in governance and can assume presidential duties if the President becomes unable to serve.",
      duties: [
        "Assisting the President",
        "Presiding over the Senate",
        "Acting as President when necessary",
        "Heading special committees or initiatives",
      ],
    },
    {
      title: "Ministers",
      description:
        "Ministers head the various federal ministries and are appointed by the President. They implement government policies in their respective areas and manage the day-to-day operations of their ministries.",
      duties: [
        "Policy implementation in specific sectors",
        "Ministry administration",
        "Advising the President",
        "Budget management for their ministry",
      ],
    },
    {
      title: "Permanent Secretaries",
      description:
        "Permanent Secretaries are the administrative heads of ministries and the highest-ranking civil servants. They ensure continuity in administration regardless of political changes.",
      duties: [
        "Administrative leadership",
        "Policy implementation",
        "Financial management",
        "Ministerial advisory",
      ],
    },
  ],
  legislative: [
    {
      title: "Senators",
      description:
        "Members of the Senate, the upper house of the National Assembly. Each of the 36 states elects three senators, while the Federal Capital Territory elects one, totaling 109 senators. They serve 4-year terms.",
      duties: [
        "Lawmaking",
        "Budget approval",
        "Confirmation of executive appointments",
        "Oversight of executive branch",
        "Representation of states",
      ],
    },
    {
      title: "Representatives",
      description:
        "Members of the House of Representatives, the lower house of the National Assembly. There are 360 Representatives elected based on population distribution across the states. They serve 4-year terms.",
      duties: [
        "Lawmaking",
        "Budget approval",
        "Constituency representation",
        "Oversight of executive branch",
        "Impeachment proceedings initiation",
      ],
    },
    {
      title: "Senate President",
      description:
        "Presides over the Senate sessions and is the third-highest ranking government official. Elected by other senators from among themselves.",
      duties: [
        "Presiding over Senate sessions",
        "Administrative leadership of the Senate",
        "Succession in government (third in line)",
      ],
    },
    {
      title: "Speaker of the House",
      description:
        "Presides over the House of Representatives and is elected by the Representatives from among themselves.",
      duties: [
        "Presiding over House sessions",
        "Administrative leadership of the House",
        "Maintaining order and decorum",
      ],
    },
  ],
  judicial: [
    {
      title: "Chief Justice",
      description:
        "Heads the Supreme Court, which is the highest court in the country. Appointed by the President and confirmed by the Senate.",
      duties: [
        "Presiding over Supreme Court",
        "Final constitutional interpretation",
        "Administration of the judiciary",
      ],
    },
    {
      title: "Supreme Court Justices",
      description:
        "Members of the highest court that has final say on constitutional matters and federal appeals. Appointed by the President upon recommendation by the National Judicial Council and confirmation by the Senate.",
      duties: [
        "Constitutional interpretation",
        "Hearing appeals from lower courts",
        "Setting judicial precedent",
      ],
    },
    {
      title: "Court of Appeal Justices",
      description:
        "Judges who sit on the second-highest court that hears appeals from federal high courts and state high courts.",
      duties: [
        "Hearing appeals",
        "Reviewing lower court decisions",
        "Ensuring uniform application of law",
      ],
    },
  ],
};

const state: TArm = {
  executive: [
    {
      title: "Governor",
      description:
        "The head of the state government, elected by the people of the state. Responsible for implementing state laws and managing state affairs.",
      duties: [
        "State policy implementation",
        "Appointing state officials",
        "State budget preparation",
        "Signing state bills into law",
      ],
    },
    {
      title: "Deputy Governor",
      description:
        "The second-highest executive officer at the state level who assists the governor and succeeds the governor if the position becomes vacant.",
      duties: [
        "Assisting the Governor",
        "Acting as Governor when necessary",
        "Overseeing delegated responsibilities",
      ],
    },
    {
      title: "State Commissioners",
      description:
        "Appointed by the Governor to head various state ministries and departments, similar to federal ministers but at the state level.",
      duties: [
        "Implementing state policies in specific sectors",
        "Ministry administration",
        "Advising the Governor",
        "Budget management for their ministry",
      ],
    },
    {
      title: "State Permanent Secretaries",
      description:
        "The highest-ranking civil servants in state ministries who ensure administrative continuity.",
      duties: [
        "Administrative leadership",
        "Policy implementation",
        "Financial management",
        "Departmental advisory",
      ],
    },
  ],
  legislative: [
    {
      title: "State House of Assembly Members",
      description:
        "Elected members of the state legislature responsible for making laws for the state. The number varies depending on the state's size.",
      duties: [
        "State lawmaking",
        "State budget approval",
        "Oversight of state executive",
        "Constituency representation",
      ],
    },
    {
      title: "Speaker of State Assembly",
      description:
        "Presides over the State House of Assembly and is elected by members from among themselves.",
      duties: [
        "Presiding over Assembly sessions",
        "Administrative leadership of the Assembly",
        "Maintaining order and decorum",
      ],
    },
  ],
  judicial: [
    {
      title: "Chief Judge of the State",
      description:
        "The head of the judiciary at the state level, presiding over the State High Court. Appointed by the Governor on recommendation from the National Judicial Council.",
      duties: [
        "Presiding over State High Court",
        "Administration of state judiciary",
        "Hearing important state cases",
      ],
    },
    {
      title: "State High Court Judges",
      description:
        "Judges appointed to hear significant civil and criminal cases at the state level.",
      duties: [
        "Trying major cases",
        "Interpreting state laws",
        "Hearing appeals from lower state courts",
      ],
    },
  ],
};

const local: TArm = {
  executive: [
    {
      title: "Local Government Chairman",
      description:
        "The head of the local government council, typically elected by the people of the local government area. Functions as the chief executive of the local government.",
      duties: [
        "Local administration",
        "Project implementation",
        "Budget management",
        "Service delivery coordination",
      ],
    },
    {
      title: "Vice Chairman",
      description:
        "Assists the Chairman and acts in their absence. Also typically elected alongside the Chairman.",
      duties: [
        "Assisting the Chairman",
        "Acting as Chairman when necessary",
        "Overseeing delegated duties",
      ],
    },
    {
      title: "Supervisory Councilors",
      description:
        "Appointed by the Chairman to oversee various departments like education, health, agriculture, works, etc.",
      duties: [
        "Department oversight",
        "Policy implementation",
        "Advisory to Chairman",
        "Program monitoring",
      ],
    },
    {
      title: "Head of Local Government Administration",
      description:
        "The highest-ranking civil servant in the local government who ensures administrative continuity.",
      duties: [
        "Administrative leadership",
        "Staff management",
        "Financial coordination",
        "Implementation oversight",
      ],
    },
  ],
  legislative: [
    {
      title: "Councilors",
      description:
        "Elected representatives from wards within the local government area who form the legislative arm of the local government.",
      duties: [
        "Local lawmaking (bye-laws)",
        "Budget approval",
        "Executive oversight",
        "Ward representation",
      ],
    },
    {
      title: "Leader of Council",
      description:
        "Presides over the Legislative Council and is usually elected by the Councilors from among themselves.",
      duties: [
        "Presiding over council meetings",
        "Coordinating legislative activities",
        "Representing the council",
      ],
    },
  ],
  judicial: [
    {
      title: "Customary Court Judges",
      description:
        "Appointed to handle customary law cases at the local level, especially in rural areas.",
      duties: [
        "Adjudicating customary disputes",
        "Interpreting customary laws",
        "Community conflict resolution",
      ],
    },
    {
      title: "Magistrates",
      description:
        "Judicial officers who preside over Magistrate Courts handling minor civil and criminal cases at the local level.",
      duties: [
        "Trying minor offenses",
        "Issuing warrants",
        "Preliminary hearings",
        "Civil dispute resolution",
      ],
    },
  ],
};

export { federal, state, local };
