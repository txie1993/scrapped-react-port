import React from 'react';
import Scroll from 'react-scroll';

const Link = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scroller = Scroll.scroller;
const scrollSpy = Scroll.scrollSpy;

class Main extends React.Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();

    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    scrollTo(place) {
        // console.log("sup");
        scroller.scrollTo("project-element", {
            duration: 1200,
            delay: 10,
            smooth: true
        });
    }
    handleSetActive(to) {
        console.log(to);
    }
    render() {
        return (
            <div className="background section">
                <div name="intro" className="intro section">
                    <h1>
                        Intro
                    </h1>
                    <p>Tony is a front-end software engineer in the San Francisco Bay Area.</p>

                    <a onClick={() => this.scrollTo("projects")}>
                        wew
                    </a>

                </div>

                <div name="projects" className="projects section">
                    <Element name="project-element"></Element>
                    <h1>Web Projects</h1>
                    <h3>Genkin Dama</h3>
                    <p>
                        Genkin Dama is a full-stack web application inspired by Kickstarter, where users can start campaigns for their projects and let other people fund their projects through rewards and pledges. Genkin Dama is built on Ruby and Rails on the back-end, a PostgreSQL database, and React.js with a Redux architectural framework on the front-end.
                    </p>
                    <p>
                        The name Genkin Dama is inspired by the iconic technique "Spirit Bomb," or "Genki Dama" from Dragon Ball Z. The technique involves gathering power from many contributors, much like a Kickstarter campaign. "Genkin" in Japanese means "cash."
                    </p>
                    <h3>Lambda</h3>
                    <p>
                        Lambda is a single-page Ember.js application inspired by Twitch chat. To enter chat, a user simply needs to enter a username and click “Join”.
                    </p>
                    <p>
                        Like its inspiration, Lambda comes with integrated emote recognition as well as a language filter: certain strings will be converted to emotes, and curse words will be censored as asterisks.
                    </p>
                    <p>
                        Username colors are deterministically created by hashing the usernames themselves - no two users will share a color, and the same username will always have the same color.</p>
                    <h3>Rush Hour</h3>
                    <p>Rush Hour is a browser game built in vanilla JavaScript and HTML5 Canvas, based on the classic board game by the same name.</p>
                    <p>Drag and drop cars to get the red car out of the lot!</p>
                </div>

                <div className="education section">
                    <h1>Education</h1>
                    <h3>New York University, 2015</h3>
                    <h4>BA Linguistics, Minors: Computer Science, Web Development, Japanese</h4>
                    <h3>App Academy, SF, 2016</h3>
                    <h4>Ruby, Ruby on Rails, JavaScript, React, Redux, Ember</h4>
                    <h1>College Projects</h1>
                </div>
                <div className="assets section">
                    <h1>Assets</h1>
                </div>
                <div className="contact section">
                    <h1>Contact</h1>
                </div>
            </div>
        );
    }
}

export default Main;
