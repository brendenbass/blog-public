import Logo from './img/bb-initial-logo.svg';
import { MdAddBox } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import MobileShare from './MobileShare';
import BackButton from './BackButton';
import GithubButton from './GithubButton';

const Header = () => {

return (
<header>
    <div className="header-container">

        {/* logo */}
        <img src={Logo} className="ig-logo" alt="Instagram Logo"/>

        {/* three buttons */}
        <div className="threeButtonGroup">
            <BackButton/>
            <GithubButton/>
            <MobileShare/>
        </div>
    </div>
</header>
)
}

export default Header