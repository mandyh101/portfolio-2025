import volitionMock2 from 'public/images/projects/volition/volition-mock-2.png'
import volitionMock3 from 'public/images/projects/volition/volition-mock-3.png'
import volitionHome from 'public/images/projects/volition/volition-home.png'
import recipeMacMock from 'public/images/projects/recipe-app/recipe-app-mac-mockup1.png'
import recipeMobileMock from 'public/images/projects/recipe-app/recipe-app-mobile-mockup.png'
import bookRecommenderMock from 'public/images/projects/llm-book-search/book-recommender.png'

export const projects = [
  {
    href: 'https://www.volition.org.nz/about',
    title: 'Volition',
    description:
      'I joined start-up Volition, as a frontend developer to help launch their app. Volition is an accessible tool built to support and empower the decision-making capability of disabled people and their supporters.',
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
          innovative multimedia app that empowers people with disabilities to
          collaborate with their supporters and direct their own decisions,
          services, and lives. I was excited to join Volition, drawn by both
          their mission and the opportunity to deepen my expertise in web
          accessibility. Working in an agile, remote team environment, I helped
          transform Figma designs into functional React/TypeScript components,
          contributing to the launch of the Beta version of the app in January
          2025. The full product launch is{' '}
          <a href="https://www.linkedin.com/posts/volitionsolutions_volition-supporteddecisionmaking-disabilitysupport-activity-7292013985799778304-fhhU">
            scheduled
          </a>{' '}
          for March 2025.
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
          enhance the user experience for everyone. I believe digital
          accessibility is more than just a feature – it&apos;s a fundamental
          right. The knowledge and expertise I gained during this project has
          equipped me to prioritise and implement web accessibility best
          practices in my future projects.
        </p>{' '}
        <p>
          I&apos;m grateful for the connections I made with the team that came
          together to support this part of Volitions&apos; journey, the
          opportunity to contribute to building technology that will help
          improve lives, and I look forward to contributing more in the future.
        </p>
      </div>
    ),
    cta: 'Learn more about Volition',
  },
  {
    href: '',
    title: 'LLM-Powered Book Search',
    description:
      'Data is essential for driving good decision-making, particularly in impact-focused spaces. Keen to explore projects where I can expand my skillset in working with data and Python, I decided to build an LLM-powered book recommender.',
    thumbnail: bookRecommenderMock,
    images: [bookRecommenderMock],
    stack: ['Python', 'OpenAi', 'Langchain', 'Gradio'],
    slug: 'llm-book-recommender',
    content: (
      <div>
        <h2 className="h2">Project overview</h2>
        <p>
          Data is essential for driving good decision-making, particularly in
          impact-focused spaces. Keen to explore projects where I can expand my
          skillset in working with data, I decided to build an LLM-powered book
          recommendation system. Following a{' '}
          <a
            href="https://youtu.be/Q7mS1VHm3Yw?si=sHNxAobCRqeSTspo"
            target="_blank"
          >
            freeCodeCamp tutorial
          </a>
          , I created a system that not only recommends books but also lets
          users filter by category and emotional tone. This project was my first
          step into data science and Large Language Models (LLMs), combining my
          curiosity with practical application.{' '}
        </p>
        <h2 className="h2">
          <span className="text-sea-green-800">Tech</span> stack and
          implementation
        </h2>
        <p>
          The project leverages Python, OpenAI, LangChain, and Gradio to create
          a user-friendly book recommendation dashboard. At its core, the system
          comprises four key components:
        </p>{' '}
        <ol>
          <li>A vector database for similarity-based book recommendations</li>
          <li>
            A zero-shot classification model for fiction/non-fiction
            categorisation
          </li>
          <li>
            A fine-tuned text classification model for emotional tone analysis
          </li>
          <li>An intuitive Gradio interface for demonstration purposes</li>
        </ol>
        <h2 className="h2">
          <span className="text-sea-green-800">Growth</span> reflections
        </h2>
        <p>
          As my first Python project, I encountered and overcame several
          challenges. The syntax differences compared to JavaScript and PHP,
          which I am more familiar with, initially posed hurdles. But as I began
          to recognise similar patterns I became more confident working with teh
          python codebase. A particularly proud moment came when I independently
          debugged and resolved a data duplication issue in my final
          implementation, applying the Python skills I&apos;d learned throughout
          the course to correct my problem.
        </p>
        <p>
          The project was a great way to explore the capabilities of LLMs and to
          gain skills in working with Python and data. Working with real data
          from KaggleHub taught me valuable lessons about data cleaning,
          analysis, and the importance of data quality in machine learning
          applications. I learned to make practical decisions about feature
          implementation based on data consistency—such as limiting category
          classification to fiction/non-fiction due to data sparsity in more
          specific categories. I also learned how to see the opportunity with
          long text descriptions to analyse emotional tone alongside text
          similarity and enhance the recommendation system.
        </p>
        <video
          src="/images/projects/llm-book-search/book-recommender-demo.webm"
          autoPlay
          muted
          loop
        />
        <h2 className="h2">Where to from here?</h2>
        <p>
          Building this book recommender has sparked my interest in data
          storytelling and LLM applications. As a next step, I am looking to
          deepen my understanding of working with data and natural language
          processing models through{' '}
          <a
            href="https://huggingface.co/learn/nlp-course/en/chapter1/1"
            target="_blank"
          >
            Hugging Face&apos;s NLP course
          </a>
          . The experience of working through this tutorial has been a valuable
          stepping stone in my journey to use AI and data science for strategic
          solutions in business and decision-making. Give it a go below, and let
          me know what you think!
        </p>
      </div>
    ),
    hidePreview: true,
    showGithubLink: true,
    githubLink: 'https://github.com/mandyh101/Semantic-Book-Recommender',
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
    showGithubLink: true,
    githubLink: 'https://github.com/mandyh101/Voice-Recipe-Search-App',
  },

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
