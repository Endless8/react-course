import React from 'react'

function Card({username = "Username", post = "Not assigned yet"}) {
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:rounded-non rounded-full mx-auto" src="https://cloud.rtl.it/RTLFM/News/Article/1000x1000/pippo-baudo-torno-a-condurre-domenica-in-votow.jpg" alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, distinctio!
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    {username}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    {post}
                </div>
                </figcaption>
            </div>
            </figure>
        </div>
    )
}

export default Card