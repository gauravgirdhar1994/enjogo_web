import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-section pb-100">
        <div className="container">
          <div className="section-title">
            <span>Faq</span>
            <h2>Frequently Asked Questions</h2>
          </div>

        
       
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can an app help me learn a sport that is supposed to
                        be played on a field with 11 players in each team?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A footballer needs to perform necessary skills under the
                        pressure of a competitive match. However, to begin with,
                        one should practice in an isolated environment before
                        achieving the proficiency to perform under moderate
                        pressure (on-field training) and full pressure (match).
                        Additionally, isolated workouts can help achieve and
                        maintain one's technical sharpness and physical fitness
                        levels during pre-season, holidays or breaks. Finally,
                        technology like enJogo can also be used to keep track of
                        one’s progress along with friends.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the different packages that i can subscribe
                        for?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        There are multiple packages available for subscription:
                      </p>
                      <ul>
                        <li>Free - Limited Access</li>
                        <li>Pro - Unlimited Access to in-app workouts</li>
                        <li>
                          Master (Virtual Academy) - Live online training +
                          in-app workouts
                        </li>
                        <li>
                          Legend (Non-Residential Academy) - On-field training +
                          in-app workouts
                        </li>
                        <li>
                          Residential Academy - In-campus training + Schooling
                          (CBSE/ICSE) + Hostel + in-app workouts
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can enJogo help me become a professional footballer?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        enJogo can help you to improve your individual skills,
                        fitness levels and track your progress. Ideally,
                        workouts with enJogo should be supplemented with
                        on-field training and competitive matches with a good
                        academy team. In addition to these, becoming a
                        professional football player also depends on a lot of
                        other variables such as opportunities, luck,
                        perseverance etc.However, training under proper guidance
                        and environment can help you realize your true
                        potential.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do the leagues in enJogo work?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        There are leagues across ten (10) tiers or levels. The
                        leagues end and start every Sunday at 12 noon. At this
                        time, based on their current positions, the top [x]% of
                        the players get promoted to the next higher league while
                        the bottom [y]% get relegated to the immediate lower
                        league. The highest league is the Champions League, upon
                        reaching which, there are exciting prizes to be won. A
                        player’s position in a league at any given point in time
                        is determined by the eSP earned during the ongoing week.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are enJogo skill points (eSP)?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        For every activity that you complete (whether online or
                        on-field), you earn skill points linked to the nature of
                        the activity. For example if you complete an in-app
                        workout that has fitness and skill enhancement
                        exercises, then you earn enJogo Skill Points (eSP) in
                        Physical and Technical parameters. Similarly, if you
                        attend an on-field training session, you can earn a
                        wider variety of eSP that is spread across all
                        parameters. Currently eSPs are defined across the
                        following five parameters: Technical, Tactical,
                        Physical, Mental and Social.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
       
      </section>
    );
  }
}

export default FaqContent;
