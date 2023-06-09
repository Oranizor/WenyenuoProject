import React ,{memo}from "react";
import styled,{keyframes} from "styled-components";
import * as Svg from '../../../GlobalComponents/Data/svgs'
import * as Data from '../../../GlobalComponents/Data/static'
import * as Image from '../../../GlobalComponents/image'
import SvgMask from "../../../GlobalComponents/SVGmask";
import {useNavigate,Link} from "react-router-dom";

const Frame=styled.div`
  background-color: ${props => props.color};
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
const ShakePicture=styled.div`
  position: absolute;
  left: 10px;
  top:20px;
  z-index: 2;
  animation: ${props => {
 
    return (
        keyframes`
            
            0%{
              transform: scale(1)  translateY(0px);
            }
            
            100%{
              transform: scale(1.05) translateY(2px);
            }
            
           `
    )
}} ease-in-out ${props=>props.interval}s infinite;
  animation-direction:alternate;
  animation-delay: ${props => props.delay}s;
`

const Circle=styled.div`
  //background-color: red;
  width: ${props => props.r}vw;
  height: ${props => props.r}vw;
  position: absolute;
  left: 60%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  border-radius: ${props => props.r}vw;
  border: black 1px ${props => props.dashed?"dashed":"solid"};
  z-index: 1;
  opacity: 0.4;
`

const Works=styled.div`
  //background-color: red;
  height: 400px;
  width: 600px;
  position: absolute;
  right: ${props => props.right}vw;
  left: ${props => props.left}vw;
  
  top:${props => props.top}vh;
  bottom:${props => props.bottom}vh;
`
const WorksInner=styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  //background-color: #61dafb;
`

const WorksTitle=styled.div`
  font-family: Floane;
  font-size: 26px;
  color: black;
  // background-color: #282c34;
  position: absolute;
  top: ${props => props.top}px;
  left: 230px;
`


const RotateStar=styled.div`
    position: absolute;
   animation: ${props => {
    return (
        keyframes`

            0%{
              transform: rotate( ${props.startDeg}deg)  scale(${props.correction});
            }

            100%{
              transform: rotate(${props.dire?props.startDeg+2:props.startDeg-5}deg) scale(${props.correction});
            }

           `
    )
}} 4s ease-in-out infinite alternate;
  transform-origin:   ${props => props.r/2}vw  ${props => props.r/2}vw;
`
// function SelectedPhotoScale(index){
//     console.log("进入函数",document.getElementsByName(`Door${index}`))
// }
const Doors=memo((props)=>{
    const CircleR=[70,50,30]
    //console.log("【性能警告】Doors在渲染")
    return(
        <Frame>
            {/*内圈*/}
            <Circle r={CircleR[2]} dashed={true}>
                <RotateStar r={CircleR[2]} startDeg={90} dire={false} correction={0.91}>
                    {Svg.Star1}
                </RotateStar>
                <RotateStar r={CircleR[2]+10} startDeg={306} dire={false} correction={0.78}>
                    {Svg.Star2}
                </RotateStar>
            </Circle>
            {/*中圈*/}
            <Circle r={CircleR[1]}>
                <RotateStar r={CircleR[1]-5} startDeg={70} dire={true} correction={0.8}>
                    {Svg.Star3}
                </RotateStar>
                <RotateStar r={CircleR[1]} startDeg={212} dire={false} correction={0.8}>
                    {Svg.Star4}
                </RotateStar>
            </Circle>
            {/*外圈*/}
            <Circle r={CircleR[0]} dashed={true}>
                <RotateStar r={CircleR[0]} startDeg={100} dire={false} correction={0.78}>
                    {Svg.Star4}
                </RotateStar>
                <RotateStar r={CircleR[0]} startDeg={170} dire={false} correction={0.78}>
                    {Svg.Star3}
                </RotateStar>
            </Circle>

            {/*0号 靠左*/}
            <Works left={23} bottom={13}>
                <Link to={`/${Data.HomepageData[0].contend.Door0.text}`}>
                    <WorksInner >
                        <ShakePicture delay={0} interval={4} >
                            <SvgMask  image={require(`../../../GlobalComponents/Image${Data.CoverData[0].miniCover}`)} index={0} />
                            <WorksTitle top={300}>
                                {Data.HomepageData[0].contend.Door0.text}
                            </WorksTitle>
                        </ShakePicture>
                    </WorksInner>
                </Link>
            </Works>

            {/*1号 靠中间*/}
            <Works left={36} top={7}>
                <Link to={`/${Data.HomepageData[0].contend.Door1.text}`}>
                    <WorksInner>
                        <ShakePicture delay={0} interval={5}>
                            <SvgMask image={require(`../../../GlobalComponents/Image${Data.CoverData[1].miniCover}`)} index={1}/>
                            <WorksTitle top={130}>
                                {Data.HomepageData[0].contend.Door1.text}
                            </WorksTitle>
                        </ShakePicture>
                    </WorksInner>
                </Link>
            </Works>

            {/*2号 靠右*/}
            <Works left={52} bottom={27}>
                {/*18*/}
                <Link to={`/${Data.HomepageData[0].contend.Door2.text}`}>
                    <WorksInner >
                        <ShakePicture delay={2} interval={4}>
                            <SvgMask  image={require(`../../../GlobalComponents/Image${Data.CoverData[2].miniCover}`)} index={2}/>
                            <WorksTitle top={200}>
                                {Data.HomepageData[0].contend.Door2.text}
                            </WorksTitle>
                        </ShakePicture>
                    </WorksInner>
                </Link>

            </Works>
        </Frame>
    )
})

export default Doors