import './App.css';

import React from 'react';

import {
    createMuiTheme, responsiveFontSizes, ThemeProvider,
} from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import {Section, Entry, Experience, Publication, Github} from './Components.js';


function Photo({...props}) {
    return (
        <img
          alt="Headshot in front of brick wall"
          src="./photo.jpeg"
          {...props}
        />
    );
}

function Header() {
    return (
        <Section>

          <Entry title={<Photo className="largePhoto" />} />

          <Entry
            title={
                <Typography variant="h3" component="h1">
                  Wannes Rombouts
                </Typography>
            }
            desc={
                <Typography variant="h5" component="span">
                  Python Expertise & Security<br />
                  Full Stack Freelance
                </Typography>
            }
            leftTitle={
                <Photo className="smallPhoto" />
            }
          />

        </Section>
    );
}

function Contact() {
    return (
        <Section>

          <Grid container>

            <Grid container item xs={12} sm={1}>
            </Grid>

            <Grid container item xs={12} sm={6}>
              <Entry
                inline
                icon={<PhoneAndroidIcon fontSize="small" />}
                title={
                    <Link href="tel:+33645297604">
                      (+33) 06 45 29 76 04
                    </Link>
                }
              />
              <Entry
                inline
                icon={<MailIcon fontSize="small" />}
                title={
                    <Link href="mailto:wapiflapi+cv@gmail.com">
                      wapiflapi@gmail.com
                    </Link>
                }
              />
              <Entry
                inline
                icon={<AccountBalanceIcon fontSize="small" />}
                title={
                    <Link href="https://www.malt.fr/profile/wapiflapi">
                      malt.fr/profile/wapiflapi
                    </Link>
                }
              />
            </Grid>

            <Grid container item xs={12} sm={5}>
              <Entry
                inline
                icon={<LinkedInIcon fontSize="small" />}
                title={
                    <Link href="https://www.linkedin.com/in/wapiflapi/">
                      linkedin.com/in/wapiflapi
                    </Link>
                }
              />
              <Entry
                inline
                icon={<TwitterIcon fontSize="small" />}
                title={
                    <Link href="https://twitter.com/wapiflapi">
                      twitter.com/wapiflapi
                    </Link>
                }
              />
              <Entry
                inline
                icon={<GitHubIcon fontSize="small" />}
                title={
                    <Link href="https://github.com/wapiflapi">
                      github.com/wapiflapi
                    </Link>
                }
              />
            </Grid>

          </Grid>
        </Section>
    );
}

function Skills() {
    return (
        <Section title="Skills">
          <Experience
            date="Languages"
            title="French, English, Dutch"
            at="trilingual"
          />

          <Experience
            date="Soft Skills"
            title="Creative, Critical Thinking"
            at="Scrum Master"
          >
            Open Source contributor, Workshops,
            Conferences, Teaching, Code Reviews
          </Experience>

          <Experience
            date="Dev"
            title="Expertise in Python & GraphQL"
            at="REST, NodeJS, React"
          >
            Django, Flask, FastAPI, Graphene, Ariadne, DataLoader<br/>
            Redis, Mongo, PostgreSQL, C/C++, PHP, Go, Rust, Java
          </Experience>

          <Experience
            date="DevOps"
            title="CI/CD"
            at="AWS, Azure, GCP"
          >
            GitHub, GitLab, Docker, Kubernetes, Helm, OpenFaaS
          </Experience>

          <Experience
            date="Fundamentals"
            title="Algorithms, Data Structures"
            at="System Architecture"
          >
            Networks, Databases, Distributed Systems, Operating Systems
          </Experience>

          <Experience
            date="Security"
            title="Reverse Engineering"
            at="Exploit writing, Vulnerability discovery, Memory corruptions"
          >
            IDA Pro, Ghidra, GDB,
            Fuzzers - targeting Linux Kernel, libc, web, networks
          </Experience>

          <Experience
            date="Crypto"
            title="Blockchain, EVM"
            at="devp2p, RLPx"
          />

        </Section>
    );
}


function Education() {
    return (
        <Section title="Education">
          <Experience
            date="2015"
            title="Master of Information Technology"
          >
            Epitech, Paris Graduate School of Digital Innovation, France
          </Experience>
          <Experience
            date="2014"
            title="Master of Science in Computer Security with Distinction"
          >
            University of Kent at Canterbury, UK
          </Experience>
        </Section>
    );
}


function Work() {
    return (
        <Section title="Experience">

          <Experience
            date="2019 - present"
            title="Tech & Strategy Consultant"
            at="Freelance, remote and Toulouse FR"
          >
            After working pro-bono with multiple early-stage startups
            I now do freelance consulting. Challenging teams and
            helping them get the most value out of their time by
            facilitating technical and strategic decisions.
          </Experience>

          <Experience
            date="2021 - present"
            title="Bug Bounty Hunter"
            at="gitlab.com and others via hackerone.com, fully remote"
          >
            Identifying errors with business logic or other security
            vulnerabilities. I report high and critical (CVSS 7+)
            issues to well known projects and work with their teams to
            assess impact and remediation. This has a direct effect on
            their products and the safety of their users.
          </Experience>

          <Experience
            date="Mar. 2021 - present"
            title="Expert Python Consultant"
            at="CISCO, fully remote"
          >
            Design of multiple microservices and FaaSs using the
            Openfaas stack running on a large Kubernetes cluster with
            Cloudevents. Doing developer advocacy as well as training for
            the rest of the team to set-up a good environment for
            futur developers.
          </Experience>

          <Experience
            date="2018 - present"
            title="Event coordinator & Creative writer"
            at="Volunteer, in person and online"
          >
            I run a biweekly social event focussed on collaborative
            story-telling. I encourage narrative generation and
            individual expression by creating a safe and inviting
            environement. I run a D&D game.
          </Experience>

          <Experience
            date="Apr. 2019 - Oct. 2019"
            title="Tech Lead"
            at="Pepino, fully remote"
          >
            After months of weekly strategy consulting, I joined the
            project full time to lead the work on a new app. I built
            the software using agile and user-centric methods which
            allowed us to test market strategies and iterate quickly.
          </Experience>

          <Experience
            date="Apr. 2015 - Oct. 2018"
            title="Head of R&D"
            at="Cenareo.com (ex CityMeo), Toulouse FR"
          >

            Witnessing the team scale from five to 30+, solving the
            problems of pushing content to thousands of connected
            devices, I helped restructure a monolith and contributed
            to the open source Python and GraphQL ecosystem.

            I had the opportunity to work on innovative algorithms but
            also to improve our internal training, tooling and culture.
          </Experience>

          <div className="newpage">
            <Entry title={
                <Typography variant="h4" component="span">
                  <small>
                    Earlier experience & internships
                  </small>
                </Typography>
            }/>
          </div>

          <Experience
            date="2011 - 2015"
            title="Founder & Manager"
            at="Security Lab - Epitech, Toulouse FR"
          >
            I organised events, supervised projects and taught classes
            focused on computer security. I coordinated with the
            school and managed the club. We qualified for national and
            international competitions.
          </Experience>

          <Experience
            date="Sep. 2014 - Feb. 2015"
            title="Security Consultant"
            at="part-time at Neogeo Technologies, Toulouse FR"
          >
            I assessed and helped increase our clients security
            standards by performing audits and penetration tests.
          </Experience>

          <Experience
            date="May - August 2013"
            title="Lead Python Developer"
            at="intern at Neogeo Technologies, Toulouse FR"
          >
            Working on geographic information systems, I designed and
            implemented an API for managing MapServer's configuration
            and used it for a PyQT GUI plugin for QGIS
          </Experience>

          <Experience
            date="2013"
            title="C & Embedded Engineer"
            at="Airbus Innovation Cell, Toulouse FR"
          >
            I worked with Airbus engineers on prototyping distributed
            architectures using embedded hardware.
          </Experience>

          <Experience
            date="2011 - 2013"
            title="Teaching Assistant"
            at="Epitech, Toulouse FR"
          >
            I mentored students, supervised practical work and
            participated in the assessment process.
          </Experience>

          <Experience
            date="Jun. - Sep. 2011"
            title="Python Developer"
            at="intern at ITrust, Toulouse FR"
          >
            I wrote software to evaluate and quantify the user
            experience on websites. I used Python and Selenium.
          </Experience>

        </Section>
    );
}


function Software() {
    return (
        <Section title="Open Source">
          <Github
            name="admiral"
            users="10k+"
          >
            Modules for VCV Rack, a virtual synthesizer, exploring
            real-time digital sound processing technology.
          </Github>
          <Github
            name="binglide"
            stars="564"
            forks="75"
          >
            A visual reverse engineering tool that introduced new
            techniques to the open source community.
          </Github>
          <Github
            name="villoc"
            stars="512"
            forks="67"
          >
            A heap visualisation tool used during exploitation of
            memory corruptions, written during a CTF competition,
            this project has seen a lot of growth and contributions
            from the community that is using it.
          </Github>
          <Github
            name="exrs"
            stars="370"
            forks="60"
          >
            A group of exercises that form a journey from a very first
            introduction to reverse engineering and binary
            exploitation to state of the art techniques. EXRS is used
            in several schools and computer security clubs.
          </Github>
          <Github
            name="gxf"
            stars="37"
            forks="7"
          >
            A set of GNU Project Debugger extensions, written to
            explore its internals and assist reverse engineering.
          </Github>
        </Section>
    );
}


function Publications() {
    return (
        <Section title="Publications">

          <div className="printOnly">
            <Entry
              desc={
                  <span>
                    Links to the articles can be found
                    on <Link href="%PUBLIC_URL%">
                         wapiflapi.github.io/resume
                       </Link>
                  </span>
              }
              leftTitle={
                  <img
                    className="qrcode"
                    alt="QR code to online resume"
                    src="./resumeqr.png"
                  />
              }
            />
          </div>

          <Experience
            date="Dec. 2019"
            title="The different implementations of GraphQL in Python"
            at="Python meet-up Toulouse"
          >
            Discussion about the internals of python implementation of
            GraphQL and comparisons to Javascript.
          </Experience>

          <Experience
            date="Nov. 2019"
            title="Intro to Cache Attacks & Side Channels"
            at="Epitech open days"
          >
            Introducing the general public to advanced exploitation of
            internet vulnerabilities.
          </Experience>

          <Publication
            date="May 2019"
            title="EXMCISC: Learning CISC microcode and hacking together privilege levels"
            href="https://github.com/wapiflapi/exmcisc"
            at="Toulouse Rootcamp 2019"
          >
            Designed and presented a CPU with minimal CISC capabilities.
          </Publication>

          <Publication
            date="Oct. 2019"
            title="Efficiency: Reverse Engineering with Ghidra"
            href="https://wapiflapi.github.io/2019/10/10/efficiency-reverse-engineering-with-ghidra.html"
          >
            An introduction to some of Ghidra's feature, the reverse
            engineering software being new at the time.
          </Publication>

          <Publication
            date="Apr. 2015"
            title="Visualizing a single null-byte heap overflow exploitation"
            href="https://wapiflapi.github.io/2015/04/22/single-null-byte-heap-overflow.html"
          >
            Following work by Google's Project Zero, ressearch and the
            introduction of a new tool (villoc) to facilitate
            analysis.
          </Publication>

          <Publication
            date="Nov. 2014"
            title="Hack.lu's OREO with ret2dl-resolve"
            href="https://wapiflapi.github.io/2014/11/17/hacklu-oreo-with-ret2dl-resolve.html"
          >
            Exploration of dynamic linking and how it can be turned
            into primitives for building reliable exploits.
          </Publication>

          <Publication
            date="Aug. 2014"
            title="Implementing Tools for Visual Reverse Engineering"
            href="https://github.com/wapiflapi/binglide/blob/master/wr43_VisualRE_and_Flash_CAPTCHAs.pdf"
            at="dissertation at Kent University"
          >
            Outlines the development of binglide and presents research
            breaking some interactive flash CAPTCHAs.
          </Publication>

          <Publication
            date="Apr. 2014"
            title="Getting a shell on fruits - bkpctf 2014"
            href="https://wapiflapi.github.io/2014/04/30/getting-a-shell-on-fruits-bkpctf-2014.html"
          >
            Getting an unintended shell on a CTF challenge. Required
            finding interesting gadgets in libc.
          </Publication>

          <Publication
            date="Apr 2013"
            title="A python's escape from PlaidCTF jail"
            href="https://wapiflapi.github.io/2013/04/22/plaidctf-pyjail-story-of-pythons-escape.html"
          >
            Escape from a python jail with very strong input
            restrictions. Many later writeups reference this article.
          </Publication>

        </Section>
    );
}


const theme = responsiveFontSizes(createMuiTheme());

export default function App() {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="md">

            <Header />
            <Contact />
            <Skills />
            <Education />
            <Work />
            <Software />
            <Publications />
          </Container>
        </ThemeProvider>
    );

}
