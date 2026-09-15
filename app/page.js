'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight, Check, Copy, ExternalLink, Globe2, HeartHandshake,
  Menu, Rocket, ShieldCheck, Sparkles, Users, X, Zap, BookOpen
} from 'lucide-react'
import { useEffect, useState } from 'react'

const BUY_URL = 'https://ant.fun/token_share.html?chain=sol&pool=6h9zXwy6DUHdSAPTEcZd7JAH4C3AYwQXH7qhzNvcepCW&market_code=tokens&contract=84G63qKLzFfGqotnhKsoHuLb1HMYc3KdBhM4eiEKagan&ref=KJC0F8&user=%E6%8B%9B%E8%B4%A2%E7%8C%AB-%E7%A6%8F%E5%B8%85&symbol=SHAUN'
const CA = '84G63qKLzFfGqotnhKsoHuLb1HMYc3KdBhM4eiEKagan'

const menu = [
  ['Home', '#home'], ['About', '#about'], ['Vision', '#vision'],
  ['SHAUN', '#shaun'], ['Community', '#community'], ['FAQ', '#faq']
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: .6, ease: [0.22, 1, 0.36, 1] } }
}

function BuyButton({ small = false }) {
  return (
    <a className={`buy ${small ? 'small' : ''}`} href={BUY_URL} target="_blank" rel="noreferrer">
      <Rocket size={small ? 16 : 18} /> Buy $SHAUN <ArrowRight size={small ? 16 : 18} />
    </a>
  )
}

function Pill({ children }) {
  return <span className="pill"><Sparkles size={14} />{children}</span>
}

export default function Home() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  async function copyCA() {
    await navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <main>
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <a className="brand" href="#home">
          <Image src="/assets/shaun-logo.jpg" alt="SHAUN" width={44} height={44} priority />
          <div><strong>SHAUN</strong></div>
        </a>

        <div className="menu desktop">
          {menu.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>

        <div className="navRight">
          <BuyButton small />
          <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X /> : <Menu />}</button>
        </div>

        {open && (
          <div className="mobileMenu">
            {menu.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={16}/></a>)}
            <BuyButton />
          </div>
        )}
      </nav>

      <section className="hero" id="home">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <motion.div className="heroCopy" initial="hidden" animate="show" variants={reveal}>
          <Pill>Community-led • Open • Transparent</Pill>
          <h1>Build together <span>Grow together</span></h1>
          <p>SHAUN is a community-powered ecosystem initiative creating a friendlier, more open way to learn, build and participate on-chain.</p>
          <div className="heroActions">
            <BuyButton />
            <a className="softBtn" href="#about">Meet SHAUN <ArrowRight size={18}/></a>
          </div>
          <div className="miniNote">Walk with Shaun, enjoy an extraordinary life.</div>
        </motion.div>
        <motion.div className="heroMascot" initial={{ opacity: 0, scale: .92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .1 }}>
          <div className="mascotCard">
            <Image src="/assets/shaun-logo.jpg" alt="SHAUN flying bull" fill priority sizes="(max-width: 900px) 88vw, 44vw" />
          </div>
          <motion.div className="sticker sticker1" animate={{ y: [0,-8,0], rotate: [-3,1,-3] }} transition={{ repeat: Infinity, duration: 4.5 }}><span>🐂</span> community first</motion.div>
          <motion.div className="sticker sticker2" animate={{ y: [0,8,0], rotate: [2,-2,2] }} transition={{ repeat: Infinity, duration: 5.2 }}><span>✨</span> bigger dreams</motion.div>
        </motion.div>

      </section>

      <section className="caBar">
        <div>
          <span>Contract Address</span>
          <strong>{CA}</strong>
        </div>
        <button onClick={copyCA}>{copied ? <Check/> : <Copy/>}{copied ? 'Copied!' : 'Copy CA'}</button>
      </section>

      <section className="section intro" id="about">
        <motion.div className="sectionHead" initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} variants={reveal}>
          <Pill>About SHAUN</Pill>
          <h2>Serious mission.<br/><span>Friendly energy.</span></h2>
          <p>We keep the big idea simple: help more people understand on-chain participation, connect with each other, and build useful things together.</p>
        </motion.div>

        <div className="featureGrid">
          {[
            [Users, 'Community Growth', 'Bring people together and make participation easier.'],
            [BookOpen, 'User Education', 'Share clearer knowledge about on-chain activity and risk.'],
            [HeartHandshake, 'Ecosystem Support', 'Help creators, traders and developers collaborate.']
          ].map(([Icon, title, text], i) => (
            <motion.article className="featureCard" key={title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}>
              <div className="iconBubble"><Icon /></div>
              <h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section vision" id="vision">
        <div className="visionWrap">
          <motion.div className="visionText" initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={reveal}>
            <Pill>Our Vision</Pill>
            <h2>Make on-chain participation <span>easier, safer and more open.</span></h2>
            <p>SHAUN focuses on three things: helping users learn, helping communities work together, and helping the ecosystem connect with useful tools and applications.</p>
          </motion.div>
          <div className="visionChips">
            <div><Zap/> User Growth</div>
            <div><Users/> Community Collaboration</div>
            <div><Globe2/> Ecosystem Integration</div>
          </div>
        </div>
      </section>

      <section className="section shaunSection" id="shaun">
        <div className="shaunVisual">
          <Image src="/assets/shaun-logo.jpg" alt="SHAUN mascot" fill sizes="(max-width:900px) 100vw, 48vw" />
          <span className="bubbleLabel">First ecosystem project ✨</span>
        </div>
        <motion.div className="shaunText" initial="hidden" whileInView="show" viewport={{once:true,amount:.2}} variants={reveal}>
          <Pill>Meet SHAUN</Pill>
          <h2>One bull.<br/><span>One community.</span><br/>Bigger dreams.</h2>
          <p>SHAUN is a playful community brand built around education, open participation and long-term ecosystem building.</p>
          <div className="tinyList">
            <span>🌍 Open participation</span><span>🛡️ Security awareness</span><span>🧩 Open tools</span><span>🤝 Community building</span>
          </div>
          <BuyButton />
        </motion.div>
      </section>

      <section className="section roles">
        <motion.div className="sectionHead center" initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal}>
          <Pill>Different roles, shared ecosystem</Pill>
          <h2>Ant.fun builds the product. <span>SHAUN supports the community.</span></h2>
        </motion.div>
        <div className="roleGrid">
          <div className="roleCard purple">
            <div className="roleLogo"><Image src="/assets/antfun-logo.png" alt="Ant.fun" width={52} height={52} unoptimized /></div><h3>Ant.fun</h3>
            <p>Product • Technology • Operations • User Experience</p>
          </div>
          <div className="roleArrow">↔</div>
          <div className="roleCard yellow">
            <div className="roleLogo shaunLogo"><Image src="/assets/shaun-logo.jpg" alt="SHAUN rocket bull" width={52} height={52} /></div><h3>SHAUN</h3>
            <p>Community • Education • Ecosystem Support • Collaboration</p>
          </div>
        </div>
        <p className="disclaimer"><ShieldCheck size={16}/> SHAUN is community-initiated and does not represent Ant.fun or any commercial entity unless formally authorized in writing.</p>
      </section>

      <section className="section community" id="community">
        <motion.div className="sectionHead" initial="hidden" whileInView="show" viewport={{once:true}} variants={reveal}>
          <Pill>Community Vibes</Pill>
          <h2>Same memes.<br/><span>Bigger dreams.</span></h2>
          <p>Community energy matters. Here are a few SHAUN moments from the herd.</p>
        </motion.div>
        <div className="memeRow">
          {[
            '/memes/a_humorous_high_quality_cinematic_meme_scene_in.png',
            '/memes/a_highly_stylized_cinematic_3d_cgi_cartoonish_cr.png',
            '/memes/a_dynamic_high_energy_crypto_promotional_poster.png'
          ].map((src, i) => <motion.div className="memeCard" key={src} initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}><Image src={src} alt="SHAUN community meme" fill sizes="(max-width:900px) 82vw, 30vw" /></motion.div>)}
        </div>
      </section>

      <section className="section story">
        <div className="storyCard">
          <div className="storyImage"><Image src="/assets/founder-wide.png" alt="SHAUN story artwork" fill sizes="(max-width:900px) 100vw, 44vw" /></div>
          <div className="storyText">
            <Pill>The story behind the name</Pill>
            <h2>SHAUN is a name.<br/><span>The vision belongs to the community.</span></h2>
            <p>The name comes from He Xiaoyang’s English name, but the project is presented as a shared community vision around openness, long-term building and a decentralized future.</p>
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="sectionHead center">
          <Pill>Quick FAQ</Pill>
          <h2>Short answers.<br/><span>No crypto essay.</span></h2>
        </div>
        <div className="faqList">
          <details><summary>What is SHAUN?<span>+</span></summary><p>SHAUN is a community brand focused on education, collaboration and ecosystem support.</p></details>
          <details><summary>What does SHAUN do?<span>+</span></summary><p>SHAUN helps users learn, communities collaborate and the ecosystem connect with useful tools.</p></details>
          <details><summary>Is SHAUN officially Ant.fun?<span>+</span></summary><p>No. Unless there is formal written authorization, SHAUN does not represent Ant.fun or another commercial entity.</p></details>
          <details><summary>Where can I buy $SHAUN?<span>+</span></summary><p>Use the Buy $SHAUN button on this website to open the provided Ant.fun token page.</p></details>
        </div>
      </section>

      <section className="cta">
        <div className="ctaMascot"><Image src="/assets/shaun-logo.jpg" alt="SHAUN" fill sizes="180px" /></div>
        <Pill>Ready to join the herd?</Pill>
        <h2>Walk with Shaun.<br/><span>Enjoy an extraordinary life.</span></h2>
        <p>Build together. Learn together. Grow together.</p>
        <BuyButton />
      </section>

      <footer>
        <a className="brand" href="#home"><Image src="/assets/shaun-logo.jpg" alt="SHAUN rocket bull" width={42} height={42}/><div><strong>SHAUN</strong></div></a>
        <p>Community-led • Transparent • Open</p>
        <div className="footerLinks">{menu.map(([label,href])=><a href={href} key={label}>{label}</a>)}<a href={BUY_URL} target="_blank" rel="noreferrer">Buy $SHAUN <ExternalLink size={13}/></a></div>
        <small>© 2026 SHAUN</small>
      </footer>

      <div className="mobileBuy"><BuyButton /></div>
    </main>
  )
}
