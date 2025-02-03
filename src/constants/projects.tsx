import volitionMock2 from 'public/images/projects/volition/volition-mock-2.png'
import volitionMock3 from 'public/images/projects/volition/volition-mock-3.png'
import volitionHome from 'public/images/projects/volition/volition-home.png'
import recipeMacMock from 'public/images/projects/recipe-app/recipe-app-mac-mockup.png'
import recipeMobileMock from 'public/images/projects/recipe-app/recipe-app-mobile-mockup.png'

export const projects = [
  {
    href: 'https://www.volition.org.nz/about',
    title: 'Volition',
    description:
      'I joined start-up Volition, as a volunteer frontend developer to help launch their app. Volition is an accessible tool built to support the decision-making capability of disabled people and their supporters.',
    thumbnail: volitionHome,
    images: [volitionHome, volitionMock2, volitionMock3],
    stack: [
      'React',
      'Typescript',
      'Scss',
      'StorybookUI',
      'Nodejs',
      'Tanstack',
      'Playwright',
    ],
    slug: 'volition',
    content: (
      <div>
        <p>
          As a front-end developer at Volition, I contributed to launching the
          Volition app, a tool for supported decision-making. Volition&apos;s
          core purpose is to champion supported decision-making through an
          innovative multi-media app that empowers people with disabilities to
          collaborate with their supporters and direct their own decisions,
          services, and lives. Working within an agile and remote team
          environment, I helped transform Figma designs into functional
          React/TypeScript components, contributing to the team successfully
          launching the MVP in January 2025.{' '}
        </p>
        <p>
          One of the most significant technical challenges I tackled during this
          project was adopting a component-first development approach using
          Storybook UI. While initially challenging, this methodology proved
          itself to be a valuable approach in our development process. By
          building and testing components in isolation, we created a robust,
          reusable component library that streamlined page assembly and
          maintained consistency across the application. This approach
          particularly shone in our dynamic and remote team environment, where
          developers could easily find, test, and implement components with
          different states and variations for the screens they were building.
          The experience taught me that sometimes the most challenging learning
          curves or seemingly slow processes can lead to the most efficient
          development practices in the long run.
        </p>{' '}
        <p>
          The work I contributed focused on creating front-end pages and
          functionality for features based on the Figma prototype, including the
          home page, settings, and circles of support functionality. Working
          with a modern tech stack including Node.js, TanStack, Prisma, and
          React pushed me to expand my technical capabilities while reinforcing
          for me the importance of collaborative problem-solving to get out of
          feeling stuck. Working on Volition reinforced my passion for creating
          technology that makes a meaningful difference in people&apos;s lives.
          The experience helped me hone my skills in web accessibility and
          highlighted how thoughtful technical implementation can directly
          enhance the user experience for everyone. Digital accessibility is
          more than just a feature – it&apos;s a fundamental right. The
          knowledge and expertise I gained during this project have equipped me
          to create more accessible web applications in the future.
        </p>{' '}
        <p>
          I&apos;m grateful for the connections I made with the team that came
          together to support this part of Volitions&apos; journey and I look
          forward to contributing more in the future.
        </p>
        <p>
          Due to confidentiality agreements, I can only share high-level details
          about my work with Volition at this time.
        </p>
      </div>
    ),
    cta: 'Learn more about Volition',
  },
  {
    href: 'https://voice-recipe-search-app.vercel.app/',
    title: 'Voice-based recipe search engine',
    description:
      'A recipe finder application using voice input (MDN Speech API) and a simple user interface.',
    thumbnail: recipeMobileMock,
    images: [recipeMacMock, recipeMobileMock],
    stack: ['React', 'Nextjs', 'Tailwindcss', 'Typescript', 'Vercel v0'],
    slug: 'voice-recipe-search-app',
    content: (
      <div>
        <p>
          The Voice Recipe Search Engine is a simple web application that uses
          the Web Speech API to enable hands-free recipe discovery for home
          cooks. Built with React, NextJS, and TypeScript, this project
          demonstrates a modern approach to solving a common kitchen challenge:
          finding recipes while your hands are occupied or messy.
        </p>
        <p>
          Guided by my pain points in the kitchen, the application features a
          clean, mobile-responsive interface, voice-to-search functionality, and
          a fallback text-to-search input. The technical stack showcases my
          proficiency in modern web development practices, including TypeScript
          for type safety, Tailwind CSS for responsive styling, and Vercel for
          deployment.
        </p>
        <p>
          This project not only serves as a practical tool for cooking
          enthusiasts - it also allowed me to explore different web technologies
          and AI-assisted development. Some of the interesting technical
          challenges in my development process for this app included:
        </p>
        <ul>
          <li>
            Configuring the Web Speech API and understanding its limitations.
          </li>
          <li>
            Learning to work with Vercel v0 AI UI generator and then optimising
            the user interface for different states, mobile browsers, and
            aesthetics.
          </li>
          <li>
            Implementing a state-managed interface that allows smooth
            transitions between recipe listings and detailed views
          </li>
        </ul>
        <p>
          Some of the future enhancements that I would love to explore on the
          roadmap for this application include:
        </p>
        <ul>
          <li>
            adding a user feedback system for user-driven feature development;
            and
          </li>
          <li>
            expanding the accessibility features to create a more inclusive
            cooking companion.
          </li>
        </ul>
        <p>
          For feedback or ideas for improvement, get in touch with me.{' '}
          <span className="font-xl text-sea-green-800">Happy cooking!</span>
        </p>
        <p className="text-orange-600">
          Please note to use this app, it&apos;s best to open the preview link
          in Chrome or Safari for compatibility with MDN Web Speech API.{' '}
        </p>
      </div>
    ),
  },
  // {
  //   href: "https://gomoonbeam.com",
  //   title: "Moonbeam",
  //   description:
  //     "Never write from scratch again with Moonbeam, your AI first writing tool",
  //   thumbnail: sidefolioMoonbeam,
  //   images: [sidefolioMoonbeam, sidefolioMoonbeam2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "moonbeam",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  // {
  //   href: "https://tailwindmasterkit.com",
  //   title: "Tailwind Master Kit",
  //   description:
  //     "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
  //   thumbnail: sidefolioTailwindMasterKit,
  //   images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "tailwindmasterkit",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
]
