import logo from '../../../assets/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className=' text-center flex flex-col gap-4 pt-10 pb-4'>
            <img className=' m-auto' src={logo} alt="" />
            <h6 className=' text-md font-font-poppins text-second-color'> Journalism Without Fear or Favour</h6>
            <p>{
                moment().format('dddd, MMMM D, YYYY')
            }</p>
        </div>
    );
};

export default Header;