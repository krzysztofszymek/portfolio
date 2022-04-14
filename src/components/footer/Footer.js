import './Footer.scss'
import FooterData from './FooterData';

function Footer() {
    return ( 
        <div className="footer">
            <div className="wrapper">
                {FooterData.map((item, id) => 
                    <a key={id} href={item.link} className='footer-item'>
                        <div className='icon' key={item.name}>
                            {item.icon}
                        </div>
                        <div className='name'>
                            {item.name}
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Footer;