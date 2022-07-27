
import header1 from "../../assets/img/header1.svg"
import header2 from "../../assets/img/header2.svg"
import header3 from "../../assets/img/header3.svg"


export const consultancyContents = {
    leftContent:
        <div className="header__left">
            <h2>The expertise you need to launch your <span>blockchain</span> project</h2>
            <p>
                Launch your project with confidence. We can come onboard at any stage
                during the project lifecycle and assist with strategy, planning, and
                execution.
            </p>
        </div>,

    rightContent:
        <div className="header__right">
            <img src={header1} alt="blockchain-header-img" />
        </div>
}



export const developmentContents = {
    leftContent:
        <div className="header__left">
            <h2>Your <span>blockchain</span> project brought to life</h2>
            <p>
                Your blockchain project brought to life
            </p>
            <p>
                From developing smart contracts to building decentralised applications (dApps), our team of experienced blockchain developers can help you bring your project to life. We've got a stellar track record, too, and have delivered on multiple platforms from ERC 20-based tokens to NFT games and DAOs.
            </p>
        </div>,

    rightContent:
        <div className="header__right">
            <img src={header2} alt="blockchain-header-img" />
        </div>
}


export const securityContents = {
    leftContent:
        <div className="header__left">
            <h2>The expertise you need to launch your <span>blockchain</span> project</h2>
            <p>
                Launch your project with confidence. We can come onboard at any stage during the project lifecycle and assist  with strategy, planning, and execution.
            </p>
        </div>,

    rightContent:
        <div className="header__right">
            <img src={header3} alt="blockchain-header-img" />
        </div>
}
