import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Intro.css";
import introImage from "../assets/pic1.JPG";

const Intro = () => {
  return (
    <>
      <div>
        <h1 id="introHeader">Introduction Page</h1>
      </div>
      <body>
        <section>
          <div class="container">
            <p class="comment">
              This begins one morning with my friend in San Diego telling me
              about an earthquake they just had.
            </p>

            <div class="imessage">
              <p class="from-them">
                Marine Mammal Fun Facts &ldquo;California Sea Lions: .&rdquo;
              </p>
              <p class="from-me">
                Have tiny ear flaps sticking out of their head
              </p>
              <p class="from-them margin-b_one">
                It&rsquo;s more like &ldquo;this is an earthquake. Check the
                Internet. Yup. Earthquake. This is the size. This is the
                epicenter. Check social media. Make sure the East Coast knows
                I&rsquo;m alive. Okay, try and go back to sleep.&rdquo;
              </p>
              <p class="from-me no-tail emoji">👍🏻</p>
              <p class="from-me">Glad you&rsquo;re safe</p>
            </div>
          </div>
        </section>
        <section className="mammalIntro">
          <img
            id="introPic"
            src={introImage}
          ></img>
          <p>
            Mammals are a diverse group of warm-blooded vertebrates that are
            characterized by the presence of mammary glands, fur or hair, and
            three middle ear bones. Mammals are the only animals that can
            produce milk to feed their young, and they are also the only animals
            that have a neocortex, a region of the brain that is associated with
            higher-order thinking.
            <br />
            There are over 5,000 species of mammals, and they can be found in a
            wide variety of habitats, from the Arctic to the Antarctic. Mammals
            range in size from the tiny bumblebee bat, which is only about 2
            inches long, to the blue whale, which is the largest animal on
            Earth.
            <br />
            Mammals play an important role in the ecosystem. They are a major
            source of food for other animals, and they also help to pollinate
            plants and disperse seeds. Mammals are also important for humans, as
            they provide us with food, clothing, and companionship.
            <br />
            Some of the most well-known mammals include humans, dogs, cats,
            horses, cows, pigs, sheep, and whales. However, there are many other
            mammals that are less well-known, such as bats, dolphins, kangaroos,
            and lemurs.
            <br />
            Mammals are an important part of the natural world, and they play a
            vital role in the ecosystem. We need to do everything we can to
            protect mammals and their habitats.
            <br />
          </p>
        </section>
        <section>
          <h2>Marine Mammal Fun Facts</h2>
          <p>California Sea Lions: </p>
          <ul>
            <li>Have tiny ear flaps sticking out of their head</li>
            <li>Can walk on all four flippers on land</li>
            <li>Swim using their very large front flippers</li>
            <li>Males are dark brown when dry</li>
            <li>Females are blond when dry</li>
            <li>Can hold their breath up to 10 minutes</li>
            <li>Most sea lions are born in the month of June</li>
            <li>Pups nurse from their mothers for 6 to 11 months</li>
            <li>
              They eat many types of fish, squid, and sometimes crustaceans such
              as: market squid, anchovies, sardines, herring, octopus, and more.
            </li>
            <li>Natural predators: sharks and killer whales</li>
          </ul>
        </section>
        <section>
          <p>Northern Fur Seals: </p>
          <ul>
            <li>Have tiny ear flaps sticking out of their head</li>
            <li>Can walk on all four flippers on land</li>
            <li>Swim using their very large front flippers</li>
            <li>Dive up to 656 ft</li>
            <li>
              Eat a variety of fish including: mackerel, herring, capelin,
              squid, lantern fish, crustaceans
            </li>
            <li>Hunt at night</li>
            <li>Spend most of their time in open ocean</li>
            <li>Males weight up to 600 lbs</li>
            <li>Females weigh up to 130 lbs</li>
            <li>Pups weigh 13-20 lbs</li>
            <li>Pups nurse from mom 4-5 months</li>
            <li>
              Fur seals have the second densest fur in the animal kingdom right
              behind sea otters
            </li>
            <li>
              Fur seals have 60,000 hairs per square centimeter (otters have
              130,000 per square centimeter)
            </li>
            <li>Natural predators: sharks and killer whales</li>
            <li>
              They eat many types of fish, squid, and sometimes crustaceans such
              as: market squid, anchovies, sardines, herring, octopus, and more.
            </li>
            <li>Natural predators: sharks and killer whales</li>
          </ul>
        </section>
        <section>
          <p>Northern Elephant Seals: </p>
          <ul>
            <li>Have holes for ears instead of ear flaps</li>
            <li>
              Bounce on their bellies (undulate their bodies) to move on land
            </li>
            <li>Swim by using their large back flippers</li>
            <li>Adult males have a long nose called a trunk</li>
            <li>Females weigh an average of 1,200 lbs</li>
            <li>Males weigh an average of 5,000 lbs</li>
            <li>Pups nurse for one month</li>
            <li>Elephant seals can hold their breath for 2 hours</li>
            <li>Elephant seals can dive about 5,000 miles deep</li>
            <li>They molt both their fur and top layer of skin once a year</li>
            <li>They eat squid and deep water fish</li>
            <li>Natural predators: sharks and killer whales</li>
          </ul>
        </section>
        <section>
          <p>Pacific Harbor Seals: </p>
          <ul>
            <li>Have holes for ears instead of ear flaps</li>
            <li>
              Bounce on their bellies (undulate their bodies) to move on land
            </li>
            <li>Swim by using their large back flippers</li>
            <li>Can dive up to 1640 ft</li>
            <li>Adults can weight up to 330 lbs</li>
            <li>Pups weigh 13-20 lbs</li>
            <li>Pups nurse for one month</li>
            <li>Elephant seals can dive about 5,000 miles deep</li>
            <li>They molt both their fur and top layer of skin once a year</li>
            <li>
              They eat a variety of fish and crustaceans including: cod,
              mackerel, herring, capelin, salmon, squid, octopus, shrimp, and
              crab
            </li>
            <li>
              Natural predators: sharks, killer whales, Steller sea lions,
              walrus, bears, and wolves
            </li>
          </ul>
        </section>
      </body>
    </>
  );
};

export default Intro;