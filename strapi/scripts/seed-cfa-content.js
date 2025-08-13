/**
 * Script to seed CFA content into Strapi
 * Run this after building Strapi: node scripts/seed-cfa-content.js
 */

const cfaContent = {
  landingPage: {
    intro_text: `In 2005, I was approached by the University of Toronto School of Continuing Studies and asked if I was interested in developing a CFA Examination Preparation Program. I gave them several unreasonable conditions, they agreed to all of them, and what resulted was a 20-year partnership that came to an end this past June 2025.

I am launching my own Program, independent of any "formal" educational institution. This has allowed me to substantially reduce the price while simultaneously improving the student experience.

If you would like to learn more about the Level relevant to you, click on one of these:`,
    links: [
      { title: "Level I Program", url_slug: "/courses/level-1" },
      { title: "Level II Program", url_slug: "/courses/level-2" },
      { title: "Level III Program", url_slug: "/courses/level-3" },
      { title: "Explaining the Fee Structure", url_slug: "/fees" },
      { title: "Click here to register for one of the CFA Examination Prep Courses", url_slug: "/register" }
    ]
  },
  
  courses: [
    {
      title: "CFA Level I",
      level: "level-1",
      slug: "level-1",
      description: `There are four Examination windows for CFA Level I: February, May, August, and November. My course is designed to prepare students for either the May, August, or November Examination.

I provide my students with proprietary summary Notes, audio lessons, and focused video modules in addition to the on-line classes conducted through Zoom.`,
      schedule: `The first class will be Tuesday October 14th and the Tuesday evening classes run from 6 p.m. Toronto time to 8 p.m. Toronto time. There are sessions on Saturday as well, running from 9 a.m. to 11 a.m. The Tuesday classes are more "lecture-like" while the Saturday sessions are more "tutorial-like". But I am the sole instructor that you will be working with, which provides continuity and the ability to integrate the material more perfectly.

The Tuesday classes run from October 14th through December 16th in 2025 while the Saturday classes go from October 18th through December 20th. There is a break for the winter Holidays, then we will pick up classes Tuesday January 6th. But before that class, there is an in-person (if you're in Toronto) "Mid-Term" Exam on Monday January 5th. Classes run for 11 weeks in 2026, with the last class being on Saturday March 21st. Altogether there are 42 classes, which means 84 hours of instruction.

All classes are held on-line through Zoom, and they are posted within two hours of the end of class.

In addition to two extra Mocks, Tests are provided along the way at the end of each Topical Area, and there is a five-hour, in-person Mock Exam that will be held Saturday April 4th. This gives you ample time for review and fine-tuning before the Level I May window, which runs from May 12th to May 18th.`,
      register_link: "/register"
    },
    {
      title: "CFA Level II",
      level: "level-2",
      slug: "level-2",
      description: `There are three Examination windows for CFA Level II: May, August, and November. My course is designed to prepare students for any of these, even while I recommend that the optimal windows are May and August.

I provide my students with proprietary summary Notes, audio lessons, and focused video modules in addition to the on-line classes conducted through Zoom.`,
      schedule: `The first class will be Wednesday October 15th and the Wednesday evening classes run from 6 p.m. Toronto time to 8 p.m. Toronto time. There are sessions on Saturday as well, running from 12 noon to 2 p.m. The Wednesday classes are more "lecture-like" while the Saturday sessions are more "tutorial-like". But I am the sole instructor that you will be working with, which provides continuity and the ability to integrate the material more perfectly.

The Wednesday classes run from October 15th through December 17th in 2025 while the Saturday classes go from October 18th through December 20th. There is a break for the winter Holidays, then we will pick up classes Wednesday January 7th. But before that class, there is an in-person (if you're in Toronto) "Mid-Term" Exam on Monday January 5th. Classes run for 11 weeks in 2026, with the last class being on Saturday March 21st. Altogether there are 42 classes, which means 84 hours of instruction.

All classes are held on-line through Zoom and will be posted with two hours of the end of class.

In addition to two extra Mock Exams, there is a five-hour, in-person Mock Exam that will be held Saturday April 4th. This gives you ample time for review and fine-tuning before the Level II May Examination window, which runs from May 19th to May 23rd.`,
      register_link: "/register"
    },
    {
      title: "CFA Level III",
      level: "level-3",
      slug: "level-3",
      description: `As you are well aware, there are three different Pathways for the CFA Level III Examination: Private Markets, Private Wealth, and Portfolio Management. You will be instructed in your preferred Pathway during the month of September, then commencing Thursday October 9th and Sunday October 12th, the three Pathways will merge and the common curriculum will be taught from those dates until Sunday December 21st.`,
      schedule: `Class are held twice a week. If you are in the Portfolio Management Pathway, all your classes will be held Thursday nights from 6 p.m. to 8 p.m. and Sunday mornings from 10 a.m. to 12 noon. First class will be Thursday September 4th and your last class will be Sunday December 21st. If you are in the Private Markets Pathway, you first class will be Tuesday September 2nd and your Saturday classes will run from 9 a.m. to 11 a.m. If you are in the Private Wealth Pathway, your first class will be Wednesday September 3rd and your Saturday classes will run from 12 noon to 2 p.m.

Whatever your Pathway, we will break for a week, allowing you to study, because on Friday October 10th there will be an in-person Test in Toronto for your Pathway. Altogether there are 30 sessions, each two hours in length, for 60 total hours of instruction. In addition to the classes that will be held over Zoom, there are audio lessons, proprietary Notes, and an in-person "essay" Mock Exam Monday January 5th, and a multiple choice Mock Exam on January 6th that will be held on-line.

In short, you're getting everything you need to succeed.`,
      register_link: "/register"
    }
  ],
  
  feeStructure: {
    description: `If you are studying with me for the first time, the fee is $1,650 plus HST. $500 of that fee goes to the individual who referred you to this Program. In order to collect that referral fee, the referrer will have to provide me with his/her Social Insurance Number and mailing address for tax purposes.

If you have studied with me before – and this includes whether it was through the University of Toronto School of Continuing Studies or George Brown College – the fee is $1,150 plus HST.

When you register, you will have access to the content for that entire calendar year without any extra fees.

Once you register with me and pass one Level, you will be invited to join my Alumni Network, and from that point forward, you will be able to enjoy that $500 referral fee. With any luck… knock on wood… studying with me will directly pay for itself in the long run!

There are several ways to pay:`,
    payment_methods: [
      { title: "E-transfer", description: "" },
      { title: "Credit card", description: "" },
      { title: "Mail a check", description: "" }
    ]
  }
};

console.log('CFA Content Data prepared for manual entry into Strapi.');
console.log('\nInstructions:');
console.log('1. Start Strapi: cd strapi && yarn develop');
console.log('2. Go to http://localhost:1337/admin');
console.log('3. Navigate to Content Manager');
console.log('4. Create Landing Page content (single type)');
console.log('5. Create Course Page entries for Level I, II, and III');
console.log('6. Create Fee Structure content (single type)');
console.log('7. Update Global > Navbar with navigation links');
console.log('\nContent has been saved to this file for reference.');