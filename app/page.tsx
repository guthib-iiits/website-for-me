const heroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_76i9ck76i9ck76i9-removebg-preview-NSJlyIfqmuhXt2l5s79P8yeIhuwnti.png"

const research = [
  ["Analog IC Design", "Current-steering DAC topologies, CT-ADC architectures, noise and linearity analysis in 65nm CMOS."],
  ["CNTFET Devices & Ternary Logic", "Carbon nanotube FET modelling, balanced ternary memory design, beyond-binary computing."],
  ["Audio Engineering", "Transducer physics, DAC/amp circuit design, portable audio signal chain optimisation."],
  ["FPGA Architecture", "DDS synthesis, MAC-layer protocol implementation, hardware description in Verilog."],
  ["PCB Design", "4-layer controlled-impedance layouts, high-speed signal integrity, Altium Designer."],
]

const tools = [["Cadence Virtuoso","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iQ5eMoIRZ9BH5ivsg1nldruhpPm5sy.png"],["Synopsys HSPICE","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P1O5YrM8TZBzlQmPCKmygye9mATwDr.png"],["Xilinx Vivado","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xE0OwUiOU93tpUuF7rnhbndMw7zRkC.png"],["Altium Designer","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HT7K4bo28UJJS4JJIi0zzwTsh0m1Gn.png"],["Silvaco TCAD","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zuE3Pnnwii809CdLViq5cnQs5phjXL.png"],["LTspice","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-blhmjJJg2OOYdtzOIY8CLZ5juxHeRd.png"],["STM32CubeMX","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YQV6vE2uPLEu8i5uzPfKKYj3rguYor.png"],["Arduino IDE","https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CxtmajhnY30ydDja6lg2AuvMYbWT69.png"]]

export default function Home() {
  return <main className="site-shell">
    <section className="hero">
      <img className="hero-art" src={heroImage} alt="Copper circuit board" />
      <div className="hero-content">
        <h1>Sripathy Siddartha</h1>
        <p className="eyebrow">Electronics Engineering Student</p>
        <p className="hero-copy">Second-year ECE student at IIIT Sri City. I work at the analog–digital boundary — current-steering ADC design in Cadence Virtuoso, FPGA synthesis in Vivado, PCB layout in Altium. I founded UDBHAV, India&apos;s first inter-IIIT hackathon. I care about audio engineering the way some people care about cars.</p>
        <nav className="text-nav"><a href="/projects">Projects ↗</a><a href="/about">About ↗</a><a href="/contact">Contact ↗</a></nav>
        <div className="hero-actions"><a className="button button-primary" href="/projects">View Projects</a><a className="button button-outline" href="/contact">Contact ↗</a></div>
      </div>
    </section>

    <section className="about" id="about">
      <div className="about-placeholder"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02911.JPG-vbDueTn5FXD33NeUwuxtpSUOv8qqWR.jpeg" alt="Sripathy Siddartha seated at a table" /></div>
      <div className="about-copy"><a className="section-heading" href="/about">About ↗</a><p>I&apos;m an electronics engineering student interested in the point where a circuit becomes a useful instrument. My work moves between embedded firmware, sensing systems, and applied signal processing. I like designs that are legible, testable, and calm under constraint. Outside the lab, I document what works, what fails, and the measurements in between.</p><a className="experience-link" href="/projects">View Projects ↗</a></div>
    </section>

    <section className="content-section"><SectionTitle>EDA &amp; SIMULATION TOOLS</SectionTitle><div className="tool-grid">{tools.map(([name, image]) => <div className="tool-cell" key={name}><img src={image} alt={`${name} logo`} /><span>{name}</span></div>)}</div></section>
    <section className="content-section"><SectionTitle>LANGUAGES &amp; TOOLS</SectionTitle><div className="language-groups"><div><b>HDL &amp; HARDWARE</b><p>Verilog / Verilog-A / Embedded C / C / C++</p></div><div><b>ENVIRONMENT</b><p>Linux / Git / Vim / Bash / Figma</p></div></div></section>
    <Footer />
  </main>
}

function SectionTitle({ children }: { children: React.ReactNode }) { return <h2 className="section-title">// {children}</h2> }

function Footer() { return <footer className="site-footer"><span>© 2026 Sripathy Siddartha</span><nav><a href="/projects">Projects</a><a href="/about">About</a><a href="/contact">Contact</a><a href="https://www.linkedin.com/in/sripathy-siddartha/">LinkedIn</a></nav><span>Built at the analog–digital boundary.</span></footer> }
