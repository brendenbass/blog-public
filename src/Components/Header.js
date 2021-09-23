import Logo from './img/bb-initial-logo.svg';
import { MdAddBox } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
// import { FiSend } from 'react-icons/fi';
import MobileShare from './MobileShare';

const Header = () => {

return (
<header>
    <div className="header-container">

        {/* logo */}
        <img src={Logo} className="ig-logo" alt="Instagram Logo"/>

        {/* three buttons */}
        <div className="threeButtonGroup">
            <MdAddBox className="addButton"/>
            <IoMdHeartEmpty className="heartButton"/>
            {/* <FiSend className="sendButton"/> */}
            <MobileShare/>
        </div>
    </div>
</header>
)
}

export default Header