import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How I Code',
  description: 'How I use Braille, screen readers, development tools, testing, and code review to build accessible software.',
};

export default function HowICodePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10 text-base sm:text-lg leading-relaxed">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-zinc-100">
        How I Code
      </h1>
      <p>
        I am a DeafBlind software developer. I use a refreshable Braille display,
        screen readers, and keyboard commands to read code and work with development
        tools. Accessibility is part of how I build and review software.
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold">Reading and navigating code</h2>
        <p>
          Braille lets me read code, punctuation, indentation, documentation, and
          error messages through touch. I use JAWS and NVDA on Windows and Orca on
          Linux. I navigate with the keyboard and pay attention to how applications
          expose focus, labels, and control states.
        </p>
        <p>
          The details matter: a control may be announced in speech while its state
          is missing from Braille. I check what I can actually read and operate,
          then use those results to guide improvements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold">Development tools</h2>
        <p>
          I work on Windows and Linux Mint. My tools include Visual Studio Code,
          Visual Studio, PowerShell, Linux terminals, and Git. I use Remote SSH
          in Visual Studio Code to work with my Linux computer.
        </p>
        <p>
          My projects include Python applications, SQL and PostgreSQL work, web
          development, and accessibility improvements. I use command-line tools
          to install dependencies, run applications and tests, and inspect Git changes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold">Writing and improving code</h2>
        <p>
          I start with a concrete task or a problem I encounter. I describe the
          behavior I need, investigate the existing implementation, and work
          toward a change I can test.
        </p>
        <p>
          I work iteratively. I try a change, review the result, and refine it.
          For accessible interfaces, I value clear headings, meaningful labels,
          predictable keyboard navigation, and information that is available in Braille.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold">Testing and debugging</h2>
        <p>
          I use automated tests, including pytest, to check software behavior.
          I also use logs, error messages, and diagnostic tools to investigate
          problems and narrow down their causes.
        </p>
        <p>
          Automated checks are one part of the process. I also test with screen
          readers and physical Braille displays. In linux-rdaccess, that includes
          checking keyboard commands, focus, Braille output, and interaction with
          Linux applications through NVDA on Windows.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-serif font-bold">Reviewing changes</h2>
        <p>
          I use GitHub branches and pull requests to organize changes. I ask for
          code review, check test results, and consider what still needs hands-on
          testing before merging.
        </p>
        <p>
          I also work with AI coding assistants to investigate bugs, explore
          solutions, and review changes. I give feedback based on what happens
          when I use the software. Passing tests matter, and so does whether I
          can complete the task with my keyboard and Braille display.
        </p>
      </section>
    </div>
  );
}
