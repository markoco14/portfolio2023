import Image from "next/image"
import Link from "next/link"

export default function ESL () {
    return (
        <section
            id="esl"
            className="px-2 sm:px-4 py-24 min-h-screen mx-auto bg-slate-900 text-white"
            >
            <div className="max-w-[600px] mx-auto ms:mb-24">
                <h2 className="text-5xl text-bold mb-4">ESL</h2>
                <p className="mb-8">
                    I recently decided I want to automate some tasks at my teaching job. I&apos;m making some apps to help me make materials and games for my 
                    students. This section is dedicated to the tools that make my life easier as a teacher.
                </p>
            </div>
            <hr className="my-8 max-w-[1000px] mx-auto"/>
            <div className="grid max-w-[1000px] mx-auto">
                <div className="sm:flex sm:gap-4">
                    <div className="min-w-[300px] flex items-center justify-center px-2 mb-8 sm:mb-0">
                        <Image
                            src="/images/swim.png"
                            alt="Charades app image."
                            width={500}
                            height={400}
                            objectFit="cover"
                            className="mx-auto border rounded"
                            />
                    </div>
                    <div>
                        <h3 className="text-4xl mb-4">Charades</h3>                
                        <p className="border p-1 rounded-md mb-4 text-center sm:text-left">Ruby on Rails | PostgreSQL | Heroku</p>
                        <p className="mb-4">This a charades app designed to help students describe words for review. I made it because I found many early ESL students are great at memorizing words, but struggle to explain them. It&apos;s especially true in classes with varying skill levels - some students answer everything and others shy away. With this take on Charades, there are students who guess the word and students who read the word descriptions out loud. By giving students the descriptions, we overcome the barrier of not knowing how to describe the word. Over time, students develop a natural muscle for using simple words to explain any concept.</p>
                        <div className="flex gap-4">
                            <Link href="https://github.com/markoco14/rails-charades" rel="noopener noreferrer" target="_blank"
                            className="underline underline-offset-2 p-1 hover:bg-white hover:text-slate-900 active:scale-95 rounded-md">Code</Link>
                            <Link href="https://charades.markodevo.com" rel="noopener noreferrer" target="_blank" 
                            className="underline underline-offset-2 p-1 hover:bg-white hover:text-slate-900 active:scale-95 rounded-md">Website</Link>
                        </div>
                    </div>
                </div>
                <hr className="my-8"/>
                <div className="sm:flex sm:gap-4">
                    <div className="min-w-[300px] flex items-center justify-center px-2 mb-8 sm:mb-0">
                        <Image
                            src="/images/conjugation.png"
                            alt="Conjugation app image."
                            width={300}
                            height={200}
                            objectFit="cover"
                            className="mx-auto rounded"
                            />
                    </div>
                    <div className="grow-0">
                        <h3 className="text-4xl mb-4">Present Tense Conjugation Practice</h3>
                        <p className="border p-1 rounded-md mb-4 text-center sm:text-left">FastAPI | Docker | Cloud Run</p>
                        <p className="mb-4">This is a worksheet generator. Refresh the page to get a new worksheet with different verbs and subjects. I haven&apos;t set up any PDF functionality, but it&apos;s on my radar. For now, I use the browser&apos;s built in print &apos;Save to PDF&apos; works well enough.</p>
                        <div className="flex gap-4">
                            <Link href="https://github.com/markoco14/conjugation" rel="noopener noreferrer" target="_blank"
                            className="underline underline-offset-2 p-1 hover:bg-white hover:text-slate-900 active:scale-95 rounded-md">Code</Link>
                            <Link href="https://conjugation.markodevo.com" rel="noopener noreferrer" target="_blank" 
                            className="underline underline-offset-2 p-1 hover:bg-white hover:text-slate-900 active:scale-95 rounded-md">Website</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}