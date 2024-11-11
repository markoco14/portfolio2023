import Image from "next/image"


export default function LearnMoreCharades() {
    return (
        <section
            id="esl"
            className="px-2 sm:px-4 py-24 min-h-screen max-w-[1000px] mx-auto"
            >
                <div className="min-w-[300px] flex items-center px-2">
                        <Image
                            src="/images/swim.png"
                            alt="Charades app image."
                            width={500}
                            height={400}
                            objectFit="cover"
                            className="mx-auto border rounded-md"
                            />
                    </div>
                <h3 className="text-4xl mb-4">ESL Charades</h3>
                <h4 className="text-xl text-gray-600">The Pain Point</h4>
                <p className="mb-4">This is a charades app that solves a problem with charades for early ESL learners - most students don&apos;t know many words. A lack of regular reading habits and restrictive curricula mean that many students just don&apos;t have the skills to explain things. </p>
                <h4 className="text-xl text-gray-600">The Solution</h4>
                <p className="mb-4">With this take on Charades, there are students who guess and students who read the descriptions out loud. By giving students the descriptions they can use, the problem of not knowing what to say is negated. Over time, students develop a natural muscle for using simple words to explain any concepts.</p>
                <h4 className="text-xl text-gray-600">The Tech Stack</h4>
                <p className="mb-4">Built with Ruby on Rails | With a Postgres database | Runs on Heroku</p>
                <h4 className="text-xl text-gray-600">Developer&apos;s notes</h4>
                <p className="mb-4">I&apos;m building this for two purposes. First, I will use this in my classrooms. The app isn&apos;t quite ready. I will add more words and desrciptions shortly. Also, I will likely move &apos;add new words&apos; functionality behind a user login. The game will be public but the content will rely on some admins. Second, I used Ruby on Rails to show my ability to quickly put something together as part of job applications.</p>
                </section>
    )
}