import AdSpace from "../components/adspace.jsx";
import ThumbnailById from "../components/thumbnails.jsx";
import "../style/thumbnail.css";
import Scrolldown from "../components/scrolldown.jsx";
import Gridads from "../components/gridad.jsx";
import Navtab from "../components/navtab.jsx";


export default function Home() {
    const ads = [
        { title: "Adspace 1", description: "This is the first advertisement." },
        { title: "Adspace 2", description: "This is the second advertisement." },
        { title: "Adspace 3", description: "This is the third advertisement." },
        { title: "Adspace 4", description: "This is the fourth advertisement." },
        { title: "Adspace 5", description: "This is the fifth advertisement." },
    ];

    const gridads = [
        [
            { title: "Adspace 1" },
            { title: "Adspace 2" },
            { title: "Adspace 3" },
            { title: "Adspace 4" },
        ],
        [
            { title: "Adspace 5" },
            { title: "Adspace 6" },
            { title: "Adspace 7" },
            { title: "Adspace 8" },
        ],
        [
            { title: "Adspace 9" },
            { title: "Adspace 10" },
            { title: "Adspace 11" },
            { title: "Adspace 12" },
        ],
        [
            { title: "Adspace 13" },
            { title: "Adspace 14" },
            { title: "Adspace 15" },
            { title: "Adspace 16" },
        ],
    ];

    return (
        <>
            <Scrolldown />
            {/* Section 1 */}
            <section>
                <AdSpace ads={ads[0]} />
                <ThumbnailById id={1} />
                <Navtab />
                
                <Gridads gridads={gridads[0]} />
                <Gridads gridads={gridads[1]} />
            </section>
            {/* Section 2 */}
            <section>
                <AdSpace ads={ads[1]} />
                <ThumbnailById id={3} />
                <ThumbnailById id={4} />
                <Gridads gridads={gridads[2]} />
                <Gridads gridads={gridads[3]} />
            </section>
            {/* Section 3 */}
            {/* <section>
                <AdSpace ads={ads[2]} />
                <ThumbnailById id={5} />
                <ThumbnailById id={6} />
                <Gridads gridads={gridads[4]} />
                <Gridads gridads={gridads[5]} />
            </section> */}
            {/* Section 4 */}
            {/* <section>
                <AdSpace ads={ads[3]} />
                <ThumbnailById id={7} />
                <ThumbnailById id={8} />
                <Gridads gridads={gridads[6]} />
                <Gridads gridads={gridads[7]} />
            </section> */}
            {/* Section 5 */}
            {/* <section>
                <AdSpace ads={ads[4]} />
                <ThumbnailById id={9} />
                <ThumbnailById id={10} />
                <Gridads gridads={gridads[8]} />
                <Gridads gridads={gridads[9]} />
            </section> */}
            {/* Section 6 */}
            {/* <section>
                <AdSpace ads={ads[5]} />
                <ThumbnailById id={11} />
                <ThumbnailById id={12} />
                <Gridads gridads={gridads[10]} />
                <Gridads gridads={gridads[11]} />
            </section> */}
            {/* Section 7 */}
            {/* <section>
                <AdSpace ads={ads[6]} />
                <ThumbnailById id={13} />
                <ThumbnailById id={14} />
                <Gridads gridads={gridads[12]} />
                <Gridads gridads={gridads[13]} />
            </section> */}
            {/* Section 8 */}
            {/* <section>
                <AdSpace ads={ads[7]} />
                <ThumbnailById id={15} />
                <ThumbnailById id={16} />
                <Gridads gridads={gridads[14]} />
                <Gridads gridads={gridads[15]} />
            </section> */}

        </>
    );
}