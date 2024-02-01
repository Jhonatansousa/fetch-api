import {
  LinkedinLogo,
  GithubLogo,
  MicrosoftOutlookLogo,
} from '@phosphor-icons/react'
export const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-4 py-6 bg-highlight-color text-main-color font-medium rounded-t-md">
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/jhonatansdasilva/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo
            className="text-main-color hover:text-violet-100 active:text-violet-500 active:scale-90 transition"
            size={32}
          />
        </a>
        <a href="https://github.com/Jhonatansousa">
          <GithubLogo
            className="text-main-color hover:text-violet-100 active:text-violet-500 active:scale-90 transition"
            size={32}
          />
        </a>
        <a href="mailto:jhonatandev@outlook.com">
          <MicrosoftOutlookLogo
            className="text-main-color hover:text-violet-100 active:text-violet-500 active:scale-90 transition"
            size={32}
          />
        </a>
      </div>
      <div>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
    </footer>
  )
}
