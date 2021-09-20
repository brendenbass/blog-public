import Logo from './img/ig-name-logo.svg';
import { MdAddBox } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io'
import { FiSend } from 'react-icons/fi'

const Header = () => {
return (
<header>
    <div className="container">

        {/* logo */}
        <img src={Logo} className="img-fluid" alt="Instagram Logo"/>

        {/* three buttons */}
        <div className="threeButtonGroup">
            <MdAddBox className="addButton"/>
            <IoMdHeartEmpty className="heartButton"/>
            <FiSend className="sendButton"/>
        </div>
    </div>
</header>
)
}

export default Header