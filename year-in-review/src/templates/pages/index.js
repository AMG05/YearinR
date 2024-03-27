import { h } from 'preact';
import DefaultLayout from '@layouts/default';
import EditorialBlock from "@components/editorial-block";
import SectionIntro from "@components/section-intro";
import Blockquote from "@components/blockquote";
import Slider from "@components/slider";
import Stat from "@components/stat";
import Profile from "@components/profile";
import Image, { Figure } from "@components/image";
import LogoGrid from "@components/logo-grid";

export const title = 'A year in review - Storm ID';

// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = () => <DefaultLayout>

<div class="container" id="work">
    <EditorialBlock type="intro">
        <p>Overall, the last 12 months have presented a unique set of challenges and opportunities for digital transformation consultancies. While the pandemic has created uncertainty and budget cuts, it has also accelerated the pace of digital transformation and created new opportunities for remote services and agile ways of working. Digital transformation consultancies that can adapt to the new reality and provide high-quality services to clients will be well-positioned for success in the years ahead.</p>
    </EditorialBlock>

    <SectionIntro
        meta="Service Design in Government, September 2022"
        title={'Representing Storm on the national stage'}
        subtitle={''}>
    </SectionIntro>

    <EditorialBlock>
        <p>Service Design in Government is the international community event for anyone involved in designing and commissioning public services. For the 2022 edition, we had Lead User Researcher Rebecca Scott lined up to give a talk about the use of AI in the <a href="https://lenushealth.com/">Lenus Health platform</a>. But she also had a new baby lined up in the very near future. So in true Storm supportive spirit, Senior Content Designer Tobias Brockie joined as backup, just in case the baby decided to steal the limelight.</p>
        <p>The pair put together a great talk about the risks, assumptions, and findings from the AI work. They had to fit writing and designing the presentation around very busy client work schedules. But the hard work was worth it. Delivered to a full house, they received really positive feedback and made new connections. </p>
        <p>It was clear that there's real interest out there in the work we do. And it's worth putting in the effort to share it. Public speaking may seem daunting, but if someone 9 months pregnant can do it, we all can.</p>

    </EditorialBlock>

    <Blockquote type="indent" image="https://placehold.co/80x80" alt="" author="Jenni Parker" authorTitle="Founder and Director of Humanly">
        Excellent talk on AI, healthcare and ethics from Storm ID… So many interesting takeaways and loved their approach
    </Blockquote>

    <SectionIntro
        meta="UCI Cycling World Championships"
        title={'A rapid design cycle'}
        subtitle={''}>
    </SectionIntro>

    <EditorialBlock>
        <p>The world's greatest riders will get together in Glasgow and across Scotland this August to compete at the <a href="https://www.cyclingworldchamps.com/">UCI Cycling World Championships</a>. The biggest ever event of its size, we needed to build an engaging, scalable website that provided all event information in one place.</p>
        <p>Working to a tight budget, the team needed to produce bespoke content types, design, and code. There were also quite a few unknowns, in that not every event, location, or sponsor had been finalised yet. So the team had to make sure what they built was flexible enough to accommodate change.</p>
        <p>Quick turnarounds, getting stakeholder buy-in, and the challenges of hybrid workshops all kept the team on their toes. The first iteration of the website containing all core features and content types launched in July 2022, followed by a second release later in September 2022.</p>
    </EditorialBlock>

    <Slider id="sample">
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="/static/img/cycling-01.jpg"
                sources={[
                    { src: "static/img/cycling-01-2400.jpg", media: "(min-width: 1200px)" },
                    { src: "static/img/cycling-01-1536.jpg", media: "(min-width: 800px)" },
                    { src: "static/img/cycling-01-800.jpg", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="/static/img/cycling-02.jpg"
                sources={[
                    { src: "static/img/cycling-02-2400.jpg", media: "(min-width: 1200px)" },
                    { src: "static/img/cycling-02-1536.jpg", media: "(min-width: 800px)" },
                    { src: "static/img/cycling-02-800.jpg", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="/static/img/cycling-03.jpg"
                sources={[
                    { src: "static/img/cycling-03-2400.jpg", media: "(min-width: 1200px)" },
                    { src: "static/img/cycling-03-1536.jpg", media: "(min-width: 800px)" },
                    { src: "static/img/cycling-03-800.jpg", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="/static/img/cycling-04.jpg"
                sources={[
                    { src: "static/img/cycling-04-2400.jpg", media: "(min-width: 1200px)" },
                    { src: "static/img/cycling-04-1536.jpg", media: "(min-width: 800px)" },
                    { src: "static/img/cycling-04-800.jpg", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
    </Slider>

    <Blockquote type="indent" image="/static/img/profile-tobias.jpg" alt="" author="Tobias Brockie" authorTitle="Senior Content Designer">
        Hybrid workshops can be agonising, so we need to make sure the online side of the equation doesn’t feel left out
    </Blockquote>

    <SectionIntro
        meta="ISO 9001 and 27001 certification"
        title={'Setting the standard'}
        subtitle={''}>
    </SectionIntro>

    <EditorialBlock>
        <p>Quality, security, and privacy are at the forefront of everything we do. We’ve been building on our credentials and reputation as a trusted supplier of innovative, robust and secure products and services.</p> <p>In November 2022 we became ISO 9001 certified. ISO 9001 specifies the requirements for a quality management system (QMS). A QMS brings together business processes to form a system that focuses on quality and consistency. Being certified in this standard demonstrates our ability to consistently provide products and services that meet customer, statutory and regulatory requirements.</p> <p>In February 2023 we also became ISO 27001 certified. ISO 27001 is the world’s best-known standard for information security management systems and their requirements. This is a big step up from Cyber Essentials, and an important standard for us to achieve. It tells customers and partners that we take security and privacy extremely seriously. It show that we have robust systems and processes in place to protect the information that we control and process.</p>
    </EditorialBlock>

    <Blockquote type="indent" image="/static/img/profile-tim.jpg" alt="" author="Tim Threlfall" authorTitle="Operations Director">
    We’ve been able to develop and mature our approach to quality and security in a way that still enables us to deliver innovative products and services, quickly and effectively.
    </Blockquote>

    <LogoGrid>
        <img src="https://placehold.co/140x80"/>
        <img src="https://placehold.co/80x90"/>
        <img src="https://placehold.co/160x40"/>
        <img src="https://placehold.co/160x80"/>
        <img src="https://placehold.co/80x90"/>
        <img src="https://placehold.co/160x40"/>
    </LogoGrid>

    <div class="wrap">
        <div class="v-space row">
            <Stat 
                type="hero" 
                title="Example label" 
                figure="98" 
                suffix="%"
                summary="As digital transformation and cloud adoption continues to evolve across large public and private sector organisations, Storm has continued to deepen its capability across teams to be best positioned to capitalise on this trend and win larger programmes of work with recurring revenue streams."  
            />

            <Stat 
                title="Example label" 
                figure="36" 
                suffix="%"
                summary="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"  
            />

            <Stat 
                title="Example label" 
                figure="12" 
                suffix="%"
                summary="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"  
            />

            <Stat 
                title="Example label" 
                figure="86" 
                suffix="%"
                summary="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"  
            />
        </div>        
    </div>

    <SectionIntro
        meta="Section name"
        title={'Meet the graduate apprentices'}>
    </SectionIntro>

    <EditorialBlock>
        <p>We want to safeguard Storm ID from possible threats and risks to the business whilst creating new value for customers and increasing our competitive advantage. We want to follow best practices and comply with industry standards, build processes that help us adapt to changes quickly, build defences that protect us, and build resilience to ensure fast and effective recovery if the worst should happen.</p>
    </EditorialBlock>

    <div class="wrap">
        <div class="v-space row">

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

        </div>
    </div>    
</div>
    
<div id="impact" class="container bg-dark">
    <EditorialBlock type="intro">
        <p>Overall, the last 12 months have presented a unique set of challenges and opportunities for digital transformation consultancies. While the pandemic has created uncertainty and budget cuts, it has also accelerated the pace of digital transformation and created new opportunities for remote services and agile ways of working. Digital transformation consultancies that can adapt to the new reality and provide high-quality services to clients will be well-positioned for success in the years ahead.</p>
    </EditorialBlock>

    <SectionIntro
        meta="Section name"
        title={'Business development'}>
    </SectionIntro>

    <EditorialBlock>
        <p>We want to safeguard Storm ID from possible threats and risks to the business whilst creating new value for customers and increasing our competitive advantage. We want to follow best practices and comply with industry standards, build processes that help us adapt to changes quickly, build defences that protect us, and build resilience to ensure fast and effective recovery if the worst should happen.</p>
    </EditorialBlock>

    <Blockquote type="indent" image="https://placehold.co/80x80" alt="" author="Lorem ipsum" authorTitle="Dolor sit amet">
        Duis eu convallis erat. Integer libero eros,semper et turpis eget, ultricies varius elit. Nam lacinia porta augue eu posuere. Vivamus pulvinar tincidunt est, ut maximus ex tincidunt sit amet.
    </Blockquote>

    <Slider type="gallery" title="Lorem ipsum" subTitle="Dolor sit amet" id="sampleTwo">
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/1536x867"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/1536x867"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/1536x867"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/1536x867"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/1536x867"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
    </Slider>

    <div class="wrap">
        <div class="v-space row">
            <Stat 
                type="hero" 
                title="Example label" 
                figure="98" 
                suffix="%"
                summary="As digital transformation and cloud adoption continues to evolve across large public and private sector organisations, Storm has continued to deepen its capability across teams to be best positioned to capitalise on this trend and win larger programmes of work with recurring revenue streams."  
            />

            <Stat 
                title="Example label" 
                figure="36" 
                suffix="%"
                summary="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"  
            />

            <Stat 
                title="Example label" 
                figure="12" 
                suffix="%"
                summary="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"  
            />

            <Stat 
                title="Example label" 
                figure="86" 
                suffix="%"
                summary="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"  
            />
        </div>        
    </div>

    <SectionIntro
        meta="Section name"
        title={'Meet the graduate apprentices'}>
    </SectionIntro>

    <EditorialBlock>
        <p>We want to safeguard Storm ID from possible threats and risks to the business whilst creating new value for customers and increasing our competitive advantage. We want to follow best practices and comply with industry standards, build processes that help us adapt to changes quickly, build defences that protect us, and build resilience to ensure fast and effective recovery if the worst should happen.</p>
    </EditorialBlock>

    <div class="wrap">
        <div class="v-space row">

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

            <Profile 
                name="Catriona Vine" 
                title="Front end developer" 
                image="https://placehold.co/800x800"
                alt="Lorem ipsum"  
            />

        </div>
    </div>
</div>

<div id="culture" class="container">
    <EditorialBlock type="intro">
        <p>Overall, the last 12 months have presented a unique set of challenges and opportunities for digital transformation consultancies. While the pandemic has created uncertainty and budget cuts, it has also accelerated the pace of digital transformation and created new opportunities for remote services and agile ways of working. Digital transformation consultancies that can adapt to the new reality and provide high-quality services to clients will be well-positioned for success in the years ahead.</p>
    </EditorialBlock>

    <SectionIntro
        meta="Section name"
        title={'Business development'}>
    </SectionIntro>

    <EditorialBlock>
        <p>We want to safeguard Storm ID from possible threats and risks to the business whilst creating new value for customers and increasing our competitive advantage. We want to follow best practices and comply with industry standards, build processes that help us adapt to changes quickly, build defences that protect us, and build resilience to ensure fast and effective recovery if the worst should happen.</p>
    </EditorialBlock>

    <Blockquote type="indent" image="https://placehold.co/80x80" alt="" author="Lorem ipsum" authorTitle="Dolor sit amet">
        Duis eu convallis erat. Integer libero eros,semper et turpis eget, ultricies varius elit. Nam lacinia porta augue eu posuere. Vivamus pulvinar tincidunt est, ut maximus ex tincidunt sit amet.
    </Blockquote>

    <Slider type="gallery" title="Lorem ipsum" subTitle="Dolor sit amet" id="sampleTwo">
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/2400x1354"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/2400x1354"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/2400x1354"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/2400x1354"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
        <Figure caption="This is a caption">
            <Image
                alt="alt text"
                loading="lazy"
                width="1536"
                height="867"
                src="https://placehold.co/2400x1354"
                sources={[
                    { src: "https://placehold.co/2400x1354", media: "(min-width: 1200px)" },
                    { src: "https://placehold.co/1536x867", media: "(min-width: 800px)" },
                    { src: "https://placehold.co/800x450", media: "(min-width: 0px)" },
                ]}
            />
        </Figure>
    </Slider>

</div>

</DefaultLayout>;

export default HomePage;