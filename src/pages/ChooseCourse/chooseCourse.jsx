import * as S from './ChooseCourse.Styles.js';
import { useNavigate, useParams } from "react-router-dom";
import { useGetCorsesQuery } from 'store/slices/apiSlice.js';
import { useDispatch } from "react-redux";
import { useAuth } from 'hooks/use-auth';
import { addItemToCourse } from 'store/slices/userSlice.js';

export const ChooseCourse = ({item}) => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuth } = useAuth()
    
    const { data } = useGetCorsesQuery({ id });
    
    const onClickLogin = () => {
    navigate('/login')
    }

    const addToCart = () => {
        dispatch(addItemToCourse(data));
        navigate('/profile')
      };

    return  !data ?  ( 
        <S.Section>Loading...</S.Section>
    ) : ( 
        <S.Conteiner>
            <S.LogoBox to="/">
            <S.LogoChoose src="/img/logo.svg" alt="logo" />
            </S.LogoBox>
            <S.BlockYoga >
                <S.BlockYogaCard style={{ backgroundImage: `url(${data.image})`}} >
                <S.CourseName >{data.name}</S.CourseName>
                </S.BlockYogaCard>
            </S.BlockYoga>  
            <S.BlockForYou>
                <S.TitleForYou>Подойдет для вас, если:</S.TitleForYou>
                <S.BlockChoice>
                    <S.BlockChoice1>
                        <S.BlockChoiceSvg>
                        <svg width="67.000000" height="67.000000" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <desc>
                                    Created with Pixso.
                            </desc>
                            <defs/>
                            <rect id="Frame 56953" rx="33.500000" width="67.000000" height="67.000000" fill="#C7E957" fillOpacity="1.000000"/>
                            <path id="1" d="M34.3035 22.2266L37.1238 22.2266L37.1238 45.5L34.3035 45.5L34.3035 25.1797L34.1629 25.1797L28.4832 28.9531L28.4832 26.0938L34.3035 22.2266Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
                        </svg>                                       
                        </S.BlockChoiceSvg>
                        
                        <S.BlockChoiceTitle >{data.fitting[0]}</S.BlockChoiceTitle>
                        
                    </S.BlockChoice1>
                    <S.BlockChoice1>
                        <S.BlockChoiceSvg>                        
                        <svg width="67.000000" height="67.000000" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <desc>
                                    Created with Pixso.
                            </desc>
                            <defs/>
                            <rect id="Frame 56953" rx="33.500000" width="67.000000" height="67.000000" fill="#C7E957" fillOpacity="1.000000"/>
                            <path id="2" d="M41.3738 45.5L26.6863 45.5L26.6863 43.4531L34.3738 35.0469C37.0613 32.1016 38.327 30.5078 38.327 28.3672C38.327 25.9063 36.3973 24.3672 33.8738 24.3672C31.1785 24.3672 29.4598 26.125 29.4598 28.7735L26.7801 28.7735C26.7801 24.6797 29.8817 21.9063 33.9598 21.9063C38.0535 21.9063 40.9598 24.7735 40.9598 28.3672C40.9598 30.9453 39.7801 32.9453 35.7801 37.2266L30.5535 42.8203L30.5535 43L41.3738 43L41.3738 45.5Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
                        </svg>                                         
                        </S.BlockChoiceSvg>
                        
                        <S.BlockChoiceTitle >{data.fitting[1]}</S.BlockChoiceTitle>
                        
                    </S.BlockChoice1>
                    <S.BlockChoice1>
                        <S.BlockChoiceSvg>                        
                        <svg width="67.000000" height="67.000000" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <desc>
                                    Created with Pixso.
                            </desc>
                            <defs/>
                            <rect id="Frame 56953" rx="33.500000" width="67.000000" height="67.000000" fill="#C7E957" fillOpacity="1.000000"/>
                            <path id="3" d="M41.9129 39.1797C41.9129 42.9922 38.5613 45.8203 34.0535 45.8203C29.5379 45.8203 26.3113 43.3438 26.1473 39.6797L29.0067 39.6797C29.1785 41.9297 31.3113 43.3203 34.0067 43.3203C36.9988 43.3203 39.1473 41.6485 39.1473 39.1797C39.1473 36.6172 37.1785 34.8203 33.6473 34.8203L31.7801 34.8203L31.7801 32.3203L33.6473 32.3203C36.4051 32.3203 38.327 30.7266 38.327 28.2735C38.327 25.9219 36.6629 24.3672 34.1004 24.3672C31.6785 24.3672 29.4754 25.7266 29.3738 28.0469L26.6473 28.0469C26.7801 24.3828 30.1238 21.9063 34.1473 21.9063C38.452 21.9063 41.0535 24.8438 41.0535 28.1328C41.0535 30.7578 39.5848 32.6953 37.2332 33.4063L37.2332 33.5938C40.1629 34.0781 41.9129 36.2266 41.9129 39.1797Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
                        </svg>                 
                        </S.BlockChoiceSvg>
                        
                        <S.BlockChoiceTitle >{data.fitting[2]}</S.BlockChoiceTitle>
                        
                    </S.BlockChoice1>
                </S.BlockChoice>   
            </S.BlockForYou>
            <S.Directions>
                <S.DirectionsTitle>
                    Направления:
                </S.DirectionsTitle>
                    <S.DirectionsListBlock>
                    
                    <S.DirectionsList >
                        <S.DirectionsItem>{data.directions[0]}</S.DirectionsItem>
                        <S.DirectionsItem>{data.directions[1]}</S.DirectionsItem>
                        <S.DirectionsItem>{data.directions[2]}</S.DirectionsItem>                        
                    </S.DirectionsList>
                    <S.DirectionsList >
                        <S.DirectionsItem>{data.directions[3]}</S.DirectionsItem>
                        <S.DirectionsItem>{data.directions[4]}</S.DirectionsItem>
                        <S.DirectionsItem>{data.directions[5]}</S.DirectionsItem>                        
                    </S.DirectionsList>
                    
               </S.DirectionsListBlock>
               
               <S.DirectionsTitle2 >{data.description}</S.DirectionsTitle2>

            </S.Directions>
            <S.Application>                
                <S.ApplicationTitle>
                    Оставьте заявку на пробное занятие, мы свяжемся 
                    с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!
                </S.ApplicationTitle>
                <S.ApplicationBtnDiv>
                { isAuth ? (
                    <S.ApplicationBtn onClick={addToCart}>
                        Записаться на тренировку
                    </S.ApplicationBtn>
                    ) : (
                   <S.ApplicationBtn onClick={onClickLogin}>
                        Авторизуйтесь
                    </S.ApplicationBtn>
                    )} 
                </S.ApplicationBtnDiv>
                <S.ApplicationSvg>
                <svg width="345.795410" height="337.525665" viewBox="0 0 345.795 337.526" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector" d="M193.361 200.835C176.002 192.879 173.307 162.905 173.307 162.905C173.307 162.905 145.144 198.131 134.397 186.384C125.995 177.204 148.961 143.893 177.319 135.113C200.059 128.081 211.57 159.23 214.878 171.971C223.5 205.232 281.799 228.352 333.198 252.189" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M142.041 188.595C147.754 193.639 153.934 196.699 158.129 195.477C165.804 193.242 167.549 187.194 167.41 181.788" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M158.288 178.496C162.333 181.053 166.246 182.299 169.185 181.443C172.526 180.47 174.742 178.775 176.17 176.725" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M128.646 132.959C125.498 133.462 121.819 134.777 119.394 137.982C113.783 145.391 122.104 164.176 132.839 178.164" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M141.043 118.901C137.643 119.217 133.148 120.392 130.336 124.107C125.12 130.996 131.947 147.717 141.559 161.275" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M120.51 157.057C120.51 157.057 109.813 154.329 105.762 163.725C99.123 179.083 140.348 227.741 153.648 217.767C162.801 210.904 158.134 195.49 158.134 195.49" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M121.099 199.025C121.099 199.025 116.04 204.362 123.168 215.83C134.32 233.774 151.301 237.874 156.548 230.722C162.162 223.088 155.258 216.32 155.258 216.32" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M148.972 132.11L161.951 142.447" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M168.769 233.063C173.261 231.301 177.557 228.569 180.259 226.481C180.259 226.481 228.562 264.244 307.401 299.927L333.198 252.189" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M140.262 163.389C140.262 163.389 140.644 176.183 134.384 186.389" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M152.29 183.669C152.893 183.648 160.235 187.606 162.378 193.247" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M165.926 171.197C168.428 172.824 171.945 175.751 173.321 179.371" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M130.673 208.907C130.673 208.907 136.355 200.741 142.257 202.522C148.16 204.304 157.678 211.876 157.678 211.876" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector" d="M136.025 229.083C136.025 229.083 140.548 223.186 144.994 224.296C149.439 225.406 156.491 230.509 156.491 230.509" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<ellipse id="Ellipse 637" rx="27.404673" ry="37.963764" transform="matrix(0.713084 0.713084 -0.701079 0.701079 90.4922 247.784)" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000"/>
	<ellipse id="Ellipse 639" rx="15.417332" ry="21.357674" transform="matrix(0.713084 0.713084 -0.701079 0.701079 89.897 246.683)" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000"/>
	<ellipse id="Ellipse 640" rx="1.621165" ry="2.245805" transform="matrix(0.713084 0.713084 -0.701079 0.701079 89.897 246.684)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 641" rx="1.621165" ry="2.245805" transform="matrix(0.713084 0.713084 -0.701079 0.701079 84.5859 251.679)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 642" rx="1.621165" ry="2.245805" transform="matrix(0.713084 0.713084 -0.701079 0.701079 95.4512 241.642)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 643" rx="1.621165" ry="2.245805" transform="matrix(0.713084 0.713084 -0.701079 0.701079 89.8655 240.831)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 645" rx="1.621165" ry="2.245805" transform="matrix(0.713084 0.713084 -0.701079 0.701079 95.9146 247.912)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 644" rx="1.621165" ry="2.245805" transform="matrix(0.713084 0.713084 -0.701079 0.701079 84.5471 245.638)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 646" rx="1.621165" ry="2.245805" transform="matrix(0.713084 0.713084 -0.701079 0.701079 90.5959 252.718)" fill="#271A58" fillOpacity="1.000000"/>
	<mask id="mask_26_1476" fill="white">
		<path id="Intersect" d="M106.667 233.744C110.442 240.082 108.202 250.056 100.891 257.492C93.0205 265.497 82.1101 267.677 75.8408 262.722C72.0659 256.385 74.3059 246.411 81.6172 238.974C89.4875 230.969 100.398 228.79 106.667 233.744Z" clipRule="evenodd" fill="" fillOpacity="1.000000" fillRule="evenodd"/>
	</mask>
	<path id="Intersect" d="M107.097 233.488Q110.055 238.455 108.423 245.322Q106.785 252.21 101.248 257.843Q95.2593 263.933 87.8665 265.457Q80.4329 266.988 75.5308 263.115L75.4585 263.057L75.4114 262.978Q72.4529 258.012 74.0852 251.145Q75.7227 244.257 81.2605 238.624Q87.2488 232.533 94.6416 231.01Q102.075 229.478 106.977 233.352L107.05 233.409L107.097 233.488ZM106.238 234L106.667 233.744L106.357 234.137Q101.821 230.552 94.8435 231.989Q87.7485 233.451 81.9736 239.325Q76.6311 244.759 75.0581 251.376Q73.5195 257.848 76.2705 262.466L75.8408 262.722L76.1509 262.33Q80.6873 265.915 87.6646 264.477Q94.7595 263.015 100.534 257.142Q105.877 251.708 107.45 245.09Q108.989 238.618 106.238 234Z" fill="#271A58" fillOpacity="1.000000" fillRule="nonzero"/>
	<path id="Ellipse 638" d="M116.543 220.178L127.176 230.5C137.969 241.111 134.802 261.833 120.103 276.784C105.403 291.735 84.7378 295.254 73.9453 284.643L63.1831 274.166" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<ellipse id="Ellipse 637" rx="27.404659" ry="37.963753" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 155.018 85.651)" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000"/>
	<ellipse id="Ellipse 639" rx="15.417328" ry="21.357670" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 153.836 85.239)" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000"/>
	<ellipse id="Ellipse 640" rx="1.621165" ry="2.245805" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 153.836 85.2391)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 641" rx="1.621165" ry="2.245805" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 153.279 92.5092)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 642" rx="1.621165" ry="2.245805" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 154.542 77.7717)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 643" rx="1.621165" ry="2.245805" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 149.87 80.9366)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 645" rx="1.621165" ry="2.245805" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 159.11 82.0916)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 644" rx="1.621165" ry="2.245805" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 149.179 88.0717)" fill="#271A58" fillOpacity="1.000000"/>
	<ellipse id="Ellipse 646" rx="1.621165" ry="2.245805" transform="matrix(0.9993 0.9993 -0.0374046 0.0374046 158.42 89.2267)" fill="#271A58" fillOpacity="1.000000"/>
	<mask id="mask_26_1490" fill="white">
		<path id="Intersect" d="M157.506 64.3779C149.535 64.9422 142.943 73.9052 142.523 85.1237C142.133 95.5447 147.2 104.423 154.259 106.561C162.23 105.997 168.823 97.0341 169.242 85.8156C169.632 75.3946 164.566 66.5162 157.506 64.3779Z" clipRule="evenodd" fill="" fillOpacity="1.000000" fillRule="evenodd"/>
	</mask>
	<path id="Intersect" d="M157.542 64.8766Q151.774 65.285 147.588 71.0493Q143.331 76.9107 143.023 85.1424Q142.738 92.7573 146.035 98.7062Q149.26 104.525 154.404 106.083L154.259 106.561L154.224 106.063Q159.992 105.654 164.178 99.89Q168.435 94.0285 168.743 85.7969Q169.028 78.1819 165.731 72.2331Q162.506 66.4146 157.361 64.8564L157.506 64.3779L157.542 64.8766ZM157.471 63.8791L157.563 63.8726L157.651 63.8994Q163.184 65.5751 166.605 71.7483Q170.037 77.9409 169.742 85.8343Q169.423 94.37 164.987 100.478Q160.527 106.619 154.295 107.06L154.203 107.067L154.114 107.04Q148.582 105.364 145.16 99.1909Q141.728 92.9984 142.023 85.105Q142.343 76.5693 146.779 70.4617Q151.239 64.3204 157.471 63.8791Z" fill="#271A58" fillOpacity="1.000000" fillRule="nonzero"/>
	<path id="Ellipse 638" d="M155.66 47.6997L170.472 48.1596C185.597 48.7257 197.222 66.1697 196.438 87.1218C195.654 108.074 182.757 124.6 167.632 124.034L152.621 123.547" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000" strokeLinecap="round"/>
	<path id="Vector 4371" d="M88.2422 290.765C103.385 296.71 124.754 300.673 146.18 268.941C165.945 239.667 173.151 228.568 185.014 194.399M200.835 142.925C205.548 124.041 207.32 109.276 205.937 96.0525C203.662 74.3042 197.838 63.2387 185.142 54.7764M121.888 225.513C123.046 226.135 124.418 225.981 125.96 225.15C126.814 224.69 127.72 224.021 128.67 223.162M164.19 141.043C164.126 139.682 164 138.327 163.806 136.973C163.188 132.645 161.89 128.319 159.818 123.825" stroke="#271A58" strokeOpacity="1.000000" strokeWidth="1.000000"/>
</svg>
                </S.ApplicationSvg>              
            </S.Application>
           
            

        </S.Conteiner>

              
    )
   }