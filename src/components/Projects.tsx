
import React from "react";
import Heading from "./Heading";
import Card from "./Card"
const data = [
    {
        id: 0,
        title: "Todo app",
        desc: "todo app build using next.js ",
        img: "/todo.png",
        tags: ["React", "Node", "css", "Typescript"]
    },
    
    {
        id: 1,
        title: "Shareable Resume Builder ",
        desc: "shareable resume builder using html css typescript",
        img: "/resume.PNG",
        tags: ["Html", "Node", "css", "Typescript"]
    },
    {
        id: 2,
        title: "Static Intrictive Resume",
        desc: "a Typescript-based Intrective resume built with Html Css , allowing users to showcase their skills dyanamiclly",
        img: "/static.PNG",
        tags: ["HtmlL", "Node", "css", "Typescript"]
    },
    {
        id: 3,
        title: "Analog clock",
        desc: "Analog Clock using HTML-CSS and Javascript",
        img: "/clock.PNG",
        tags: ["html", "Node", "css", "javascript"]
    },


]
const Project = () => {
    return (
        <div id="project" className="container pt-32">
            <Heading title="My Projects"/>
            <div className="grid gap-10 xl:gap-0 xl-gap-y-10 md:grid-cols-2 lg:graid-cols-3 place-items-center  ">
                {data.map((el) => (<Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
                />))}
            </div>
        </div>
    )
}
export default Project