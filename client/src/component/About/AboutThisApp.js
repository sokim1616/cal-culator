import React from 'react';
import { withRouter } from "react-router-dom";
import './About.scss';


const AboutThisApp = () => {
    return (
        <div class="g--flex">
            <article>

                <ul class="timeline">

                    <div class="timeline__endured">

                        <div class="aside filled">

                            <div class="aside__line filled__line">

                                <div class="filled__line__completed" style="height: 100%;" >

                                </div>

                            </div>

                        </div>

                        {/* <li class="timeline__event is--first-day is--monday is--complete">

                            <p class="timeline__event__date">Monday 1st August</p>

                            <figure class="dot">
                                
                        <span class="ratio svg dot__icon">
                            <canvas width="9px" height="9px"></canvas>
                            <svg viewBox="0 0 9 9"><use xlink:href="/src/svg/symbols/symbols.svg#tick"></use></svg>
                        </span>				
                        </figure>

                            <h5 class="timeline__event__title">Project Start</h5>

                            <h6 class="timeline__event__difference"></h6>

                        </li> */}

                        <li class="timeline__event">

                            <p class="timeline__event__date">Tuesday 2nd August</p>

                        </li>

                        <li class="timeline__event">

                            <p class="timeline__event__date">Wednesday 3rd August</p>

                        </li>

                        {/* <li class="timeline__event is--complete">

                            <p class="timeline__event__date">Thursday 4th August</p>

                            <figure class="dot">
                                
                        <span class="ratio svg dot__icon">
                            <canvas width="9px" height="9px"></canvas>
                            <svg viewBox="0 0 9 9"><use xlink:href="/src/svg/symbols/symbols.svg#tick"></use></svg>
                        </span>				</figure>

                            <h5 class="timeline__event__title">Status Report</h5>

                            <h6 class="timeline__event__difference"></h6>

                        </li> */}

                        <li class="timeline__event">

                            <p class="timeline__event__date">Friday 5th August</p>

                        </li>

                        <li class="timeline__event is--weekend">

                            <p class="timeline__event__date">Saturday 6th August</p>

                        </li>

                        <li class="timeline__event is--weekend">

                            <p class="timeline__event__date">Sunday 7th August</p>

                        </li>

                        {/* <li class="timeline__event is--monday is--today">

                            <p class="timeline__event__date">Monday 8th August</p>

                            <figure class="dot">
                                
                        <span class="ratio svg dot__icon is--waiting">
                            <canvas width="13px" height="3px"></canvas>
                            <svg viewBox="0 0 13 3"><use xlink:href="/src/svg/symbols/symbols.svg#waiting"></use></svg>
                        </span>				</figure>

                            <h5 class="timeline__event__title">Wireframing Starts</h5>

                            <h6 class="timeline__event__difference"></h6>

                        </li> */}

                    </div>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Tuesday 2nd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Wednesday 3rd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Thursday 4th August</p>

                        <figure class="dot">
                        </figure>

                        <h5 class="timeline__event__title">Status Report</h5>

                        <h6 class="timeline__event__difference"></h6>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Friday 5th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Saturday 6th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Sunday 7th August</p>

                    </li>

                    <li class="timeline__event is--monday">

                        <p class="timeline__event__date">Monday 1st August</p>

                        <figure class="dot">
                        </figure>

                        <h5 class="timeline__event__title">Design Starts</h5>

                        <h6 class="timeline__event__difference"></h6>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Tuesday 2nd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Wednesday 3rd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Thursday 4th August</p>

                        <figure class="dot">
                        </figure>

                        <h5 class="timeline__event__title">Status Report</h5>

                        <h6 class="timeline__event__difference"></h6>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Friday 5th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Saturday 6th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Sunday 7th August</p>

                    </li>

                    <li class="timeline__event is--monday">

                        <p class="timeline__event__date">Monday 1st August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Tuesday 2nd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Wednesday 3rd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Thursday 4th August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Friday 5th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Saturday 6th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Sunday 7th August</p>

                    </li>

                    <li class="timeline__event is--monday">

                        <p class="timeline__event__date">Monday 1st August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Tuesday 2nd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Wednesday 3rd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Thursday 4th August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Friday 5th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Saturday 6th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Sunday 7th August</p>

                    </li>

                    <li class="timeline__event is--monday">

                        <p class="timeline__event__date">Monday 1st August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Tuesday 2nd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Wednesday 3rd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Thursday 4th August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Friday 5th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Saturday 6th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Sunday 7th August</p>

                    </li>

                    <li class="timeline__event is--monday">

                        <p class="timeline__event__date">Monday 1st August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Tuesday 2nd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Wednesday 3rd August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Thursday 4th August</p>

                    </li>

                    <li class="timeline__event">

                        <p class="timeline__event__date">Friday 5th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Saturday 6th August</p>

                    </li>

                    <li class="timeline__event is--weekend">

                        <p class="timeline__event__date">Sunday 7th August</p>

                    </li>

                    <div class="aside unfilled">

                        <div class="aside__line">

                        </div>

                    </div>

                </ul>

            </article>

            <figure class="scene">

                <div class="scene__shade is--past"></div>
                <div class="scene__shade is--past"></div>
                <div class="scene__shade is--past"></div>
                <div class="scene__shade is--past"></div>
                <div class="scene__shade is--past"></div>
                <div class="scene__shade is--past"></div>
                <div class="scene__shade is--past"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>
                <div class="scene__shade"></div>

            </figure>

        </div>
    )
}


export default withRouter(AboutThisApp);