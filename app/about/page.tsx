import { Nav } from "@/app/components/nav";
import '@/app/about/aboutpage.css';

export default function AboutPage() {

    return (
        <div>
            <div className="About tint white-text">
                <div className="test">
                    <h1>Riley Alouette</h1>
                    <h2>
                        Photographer | Graphic Designer | Blender Artist 
                    </h2>
                    <h2>Based in Seattle Washington</h2>
                    <hr />
                    <p>
                        Riley specializes in landscape and urban photography, following her passion to frame the world in enticing
                        and thought provoking ways. She strives to create visual stories that bring her audience into little stories
                        in life. Her work and style reflect a blend of minimalism, color, traditional paintings, evolking the same
                        feelings you might have in a museum.
                    </p>
                </div>
            </div>
            <Nav />
        </div>
    );
}