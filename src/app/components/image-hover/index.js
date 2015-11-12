'use strict';

import React from 'react';
import classnames from 'classnames';

import SVGSequenceAnimation from '../../lib/svg-sequence-animation';

export default class ImageHover extends SVGSequenceAnimation {
  constructor(props) {
    super(props);
    this.state.fadeInDuration = 20;
    this.state.fps = 30;
  }
  onMouseEnter() {
    this.resetAnim();
    this.anim();
  }
  render() {
    const { customClass, onClick } = this.props;
    return (
      <div
        className={classnames('image-hover', customClass)}
        onClick={onClick}
        onMouseEnter={this.onMouseEnter.bind(this)}
      >
        <svg ref="animsvg" title="Image hover" role="img" viewBox="-105 197 400 400" x="0px" y="0px" className="image-hover-icon">
          <g id="Frame1">
          	<path d="M-98.4,454.4c7.2,3.1,13.8,7.9,20,13.1c16.5,12.8,34.5,23.4,52.1,34.1c1,1.4,2.8,4.1,3.8,5.5
          		c-20.3-7.6-37.9-21.4-55.5-33.8C-85.6,467.5-95.6,463.7-98.4,454.4z"/>
          </g>
          <g id="Frame2">
          	<path d="M-95,457.2c13.4,7.2,24.8,17.6,37.9,25.9c11.7,8.6,25.9,14.1,36.5,24.1c-9.7,0-17.2-6.6-25.2-11
          		c-14.1-8.6-27.9-18.3-41-27.9C-90.8,465.5-94.3,462-95,457.2z"/>
          </g>
          <g id="Frame3">
          	<path d="M-84.3,467.9c21,11.4,40.3,25.9,61.7,36.9c0.3,1.4,1,3.8,1.4,5.2c-17.9-7.9-34.1-18.6-50.7-29.3
          		C-76.3,477.2-82.9,474.8-84.3,467.9z"/>
          </g>
          <g id="Frame4">
          	<path d="M223.2,283.4C235,283.8,218.1,293.4,223.2,283.4z"/>
          	<path d="M-60.5,488.6c8.6,0.3,15.5,5.5,22.8,9.7c7.2,4.1,15.9,7.2,21,14.5C-32.6,507.5-47.7,499.9-60.5,488.6z"/>
          </g>
          <g id="Frame5">
          	<path d="M216,277.2c3.4-2.8,9.7,2.8,6.6,6.2C219.1,286.2,212.6,280.7,216,277.2z"/>
          	<path d="M-14.6,513.4c4.5-1.7,10.7,1,12.4,5.5C-4.6,524.1-17.4,518.9-14.6,513.4z"/>
          </g>
          <g id="Frame6">
          	<path d="M204.3,269c4.5-3.1,15.2,2.8,12.4,8.3C211.9,279,203.2,274.5,204.3,269z"/>
          	<path d="M65,365.8C67.1,367.9,67.1,367.9,65,365.8z"/>
          	<path d="M-8.4,517.2c27.9,9,56.9,18.6,86.5,16.9c15.5,1.4,30.3-4.1,45.5-6.6c-2.4,6.2-9.3,6.9-14.8,8.3
          		c-38.6,8.3-79.3,0.7-115.5-13.8C-7,521-8.1,518.5-8.4,517.2z"/>
          </g>
          <g id="Frame7">
          	<path d="M191.2,260.3c4.8-1.7,14.8,2.4,14.1,8.3C200.5,270,190.1,266.2,191.2,260.3z"/>
          	<path d="M62.2,365.5c5.5-3.4,6.6,5.5,1.7,6.9C58.5,375.8,57.4,366.5,62.2,365.5z"/>
          	<path d="M176.4,391c8.6,3.8,9.7,14.1,12.4,22.1c4.1,16.5,8.3,34.8,2.1,51.7c-12.1,34.1-41.4,61.4-76.5,70.7
          		c-32.8,9.7-67.2,5.2-99.3-3.4c-4.5-1.7-12.1-1.7-10.7-8.6c35.9,10.7,74.8,16.9,111,6.2c34.1-9.7,61.7-37.9,72.1-71.7
          		C191.9,434.4,181.9,412.7,176.4,391z"/>
          </g>
          <g id="Frame8">
          	<path d="M171.2,251.7c7.6-1.7,15.2,1.7,20.7,6.9C183.9,260.3,177.4,255.9,171.2,251.7z"/>
          	<path d="M109.1,328.9c1-1,3.1-3.4,4.1-4.5c35.9,10.7,60.7,42.7,73.8,76.5c7.9,21,14.5,45.9,4.5,67.2
          		c-11.7,30.7-37.6,55.5-68.9,65.8c-31.4,10.7-65.8,9-97.9,2.4c-0.3-1.7-1.7-4.8-2.1-6.2c33.1,5.5,68.3,9.3,100.7-3.1
          		c34.1-12.4,61-43.4,67.6-79.3c-0.7-29-12.4-56.9-29-80.3C149.1,348.9,129.8,336.2,109.1,328.9z"/>
          	<path d="M53.3,383.4c0.7-7.6,5.9-13.1,11-18.3C66.4,373.4,58.5,378.2,53.3,383.4z"/>
          </g>
          <g id="Frame9">
          	<path d="M150.2,242.1c5.2,0.7,10,1.7,14.8,2.4c-0.3,1.4-0.7,4.1-1,5.2C159.1,248.3,152.2,247.9,150.2,242.1z"/>
          	<path d="M52.9,321c29.6-4.5,62.4-1.7,87.6,15.9c30,21,49.3,54.8,57.2,90c6.2,27.2-7.6,54.1-24.1,74.8
          		c-25.9,30.7-67.2,42.4-106.2,41.7c-6.2-0.3-14.8,1.7-15.2-7.2c30.3,0.7,62.4-1.4,89.3-17.2c27.2-16.2,47.9-45.5,50.7-77.2
          		c-2.4-30.3-16.9-59-36.5-81.7c-20.7-24.1-53.4-35.5-84.8-33.1C65,325.8,54,330.7,52.9,321z"/>
          	<path d="M50.2,397.9c-0.3-11.7,3.4-25.9,15.2-31C59.1,376.9,56.4,388.2,50.2,397.9z"/>
          </g>
          <g id="Frame10">
          	<path d="M18.1,332c32.8-13.1,70.7-18.3,104.5-5.5c39,15.9,65.2,53.8,76.9,93.1c5.9,17.2,2.4,35.5-4.8,51.7
          		c-14.1,35.5-47.2,61.7-84.5,68.9c0.3-2.1,0.7-6.2,1-8.3c43.8-10,80.3-49,83.4-94.5c-4.1-31.7-21-61-43.8-83.1
          		c-23.4-23.4-59-31-90.7-25.5c-13.1,1.7-25.5,6.6-38.3,10L18.1,332z"/>
          	<path d="M57.8,421.7c-13.1-15.2-9.7-40,3.8-53.8c0.7,9-6.6,15.9-7.6,24.5C52.9,402.4,56.7,411.7,57.8,421.7z"/>
          </g>
          <g id="Frame11">
          	<path d="M72.2,237.6c9.3-2.1,18.6-3.8,28.3-3.1c-3.8,6.6-11.7,6.2-18.6,6.9C78.1,242.8,74.7,241,72.2,237.6z"/>
          	<path d="M-2.6,345.1c35.9-22.1,80.7-33.4,121.7-20.7c38.6,13.4,66.5,47.9,80.7,85.2c14.1,33.8-3.1,71.7-25.5,97.6
          		c-1.4-1.7-4.1-5.5-5.5-7.2c17.2-22.1,32.4-50.7,25.2-78.9c-11.7-34.5-34.5-66.9-67.6-83.4C86,319.3,38.5,331.4,2.3,353.4
          		C0.9,351.4-1.2,347.2-2.6,345.1z"/>
          	<path d="M94.7,440.6c-35.9,7.2-61-47.6-32.8-71c-5.2,13.8-12.1,29-4.8,43.4C62.6,429.3,79.5,436.2,94.7,440.6z"/>
          </g>
          <g id="Frame12">
          	<path d="M9.2,275.2c13.1-15.9,30.7-28.6,50.3-35.2c2.4,0,6.9,0.3,9,0.7c-9,7.2-20.3,9.3-29.6,15.9
          		c-9.7,5.9-17.9,14.5-25.5,22.8C11.9,277.9,10.5,276.5,9.2,275.2z"/>
          	<path d="M-15,358.9c30.7-27.2,72.7-42.7,114.1-39c38.3,3.4,70.3,30.7,90.3,62.1c10.7,17.6,21.4,37.6,17.9,59
          		c-1.4,11-4.5,21.4-8.3,31.7c-2.1-1-6.6-2.8-9-3.8c5.5-17.2,12.1-36.5,4.8-54.1c-11-27.6-29.6-52.7-54.5-69.6
          		c-21-14.5-47.9-18.3-72.4-14.1c-27.6,4.5-54.5,16.5-75.5,34.8C-9.8,363.8-13.2,360.3-15,358.9z"/>
          	<path d="M58.5,371.3c1.7,10-6.2,18.3-4.8,28.3c0.3,24.8,26.9,44.8,51,37.6c19-4.5,31-23.4,31-42.4c1,0,2.8,0,3.4,0
          		c-0.3,14.5-5.5,29.6-17.6,38.3c-18.3,14.8-47.9,11-62.1-7.6C47.1,410.3,47.1,387.2,58.5,371.3z"/>
          </g>
          <g id="Frame13">
          	<path d="M-3.3,290c7.9-15.2,20-27.9,34.1-37.9c1,1.4,2.8,4.1,3.4,5.5c-34.1,22.8-47.6,64.8-48.3,103.8
          		c27.9-26.9,66.9-42.4,105.5-42.1c36.2,0,68.6,21.7,90.7,49c18.3,22.4,33.4,51,25.5,80.7c-2.4-0.3-7.6-1.4-10-2.1
          		c1.4-12.4,3.4-25.5-2.1-36.9c-13.1-29-34.5-54.5-62.4-70c-26.5-14.5-59.3-13.4-87.2-3.1c-21.7,8.3-43.1,19.7-58.3,37.6
          		c-2.1-0.7-6.2-2.8-8.3-3.4C-19.8,343.4-17.4,314.8-3.3,290z"/>
          	<path d="M104.3,356.9c12.4-3.4,23.1,9,29,18.3c15.2,24.5,0,60-27.9,65.8c-26.5,7.6-55.8-14.5-55.5-42.1
          		c0.7-8.6,0.3-20.7,9.7-24.5c-3.8,12.4-8.3,25.9-2.4,38.3c8.3,22.8,39.3,32.8,59.3,18.6c18.3-11,24.1-37.6,12.4-55.2
          		C123.6,366.9,113.3,362,104.3,356.9z"/>
          </g>
          <g id="Frame14">
          	<path d="M0.9,277.6c1.4,1,4.5,3.1,5.9,4.1c-16.9,24.5-22.4,54.5-21.7,83.8c31-31.4,76.5-50.3,120.7-45.5
          		c32.4,4.8,60.3,25.5,80.7,50.3c13.8,17.6,27.2,38.6,24.8,62.4c-3.4-0.3-6.9-0.3-10.3-0.7c2.4-19.7-9.3-36.9-20.3-51.7
          		c-20-25.5-48.3-48.3-82-50.3c-37.6-2.1-74.8,14.1-102,39.6c-3.8,4.5-11.4,9.3-8.6,16.2c8.6,24.8,27.6,44.8,47.9,60.7l-4.1,5.5
          		C4,430.3-24.3,399.6-21.9,361.7C-22.6,332.4-16,302.1,0.9,277.6z"/>
          	<path d="M78.5,352.4c22.8-7.6,50.3,3.4,59.6,25.9c11.7,24.5-2.8,56.2-28.3,64.1c-24.1,8.6-53.1-6.2-60-30.7
          		c-4.1-12.1-2.1-24.8,2.8-36.2c2.8,1.4,5.9,2.8,8.6,4.1c-7.2,15.9-4.1,36.5,10.3,47.6c15.9,13.8,42.7,10,54.5-7.6
          		c12.1-15.9,7.9-40.7-8.3-52.1c-10-7.9-23.8-9-35.9-5.5C80.5,358.6,79.5,355.5,78.5,352.4z"/>
          </g>
          <g id="Frame15">
          	<path d="M-18.4,312.7c1.7,0.7,5.5,1.7,7.2,2.4c-4.8,17.9-5.9,36.5-4.8,55.2c28.6-32.1,71.4-52.1,114.8-51
          		c33.4,2.1,63.8,21.7,85.8,46.2c13.8,15.9,26.9,34.1,28.6,55.8c-2.8,0-7.9,0.3-10.7,0.7c-1-18.3-12.8-33.1-23.8-46.5
          		c-21-24.1-50.3-44.8-83.4-45.5c-35.5-0.3-70,16.2-95.8,40c-6.9,6.6-17.2,15.9-9.7,25.9c21.7,40,63.8,72.4,110.7,73.1
          		c0,2.1,0,5.9,0,7.6c-34.8,0-67.2-17.6-91.4-41.7c-13.4-13.4-25.5-29.3-30.7-48.3C-25.3,362-25,336.9-18.4,312.7z"/>
          	<path d="M62.6,361.7c19-16.5,50.7-15.9,67.6,3.4c18.3,19,16.2,52.4-4.1,68.9c-19.3,17.6-52.7,14.1-68.3-6.6
          		c-11.7-13.8-13.1-33.8-6.6-50.3c2.4,1,7.2,3.1,9.7,4.1c-10.3,22.8,5.9,52.4,31.4,53.4c26.5,3.1,49-27.6,37.2-51.7
          		c-9-23.4-41.4-29.6-60-13.4C67.4,367.2,64.3,363.4,62.6,361.7z"/>
          </g>
          <g id="Frame16">
          	<path d="M-16.7,374.8C9.2,342,49.8,321,91.6,319.3c35.5-0.7,68.3,18.6,92.4,43.4c13.4,14.5,26.2,31,29.6,51
          		c-2.8,0.3-7.9,1-10.3,1.4c-2.8-16.9-14.1-30.3-25.2-42.7c-20.7-22.1-48.3-40.7-79.3-42.4c-34.1-1.4-66.9,14.1-92,35.9
          		C-0.8,373.1-9.1,380-12.9,390c9.3,28.3,34.5,48.3,59,63.4c30.3,18.6,69.3,18.3,101,2.4c0.7,2.1,2.4,5.9,3.4,7.6
          		c-29.3,14.1-64.5,17.2-94.5,3.8c-34.5-15.2-66.9-42.4-78.6-79.3c-1-12.4-2.8-24.5-2.8-36.9c2.1,0,6.2,0,8.3,0
          		C-17.4,358.6-17,366.9-16.7,374.8z"/>
          	<path d="M54.7,370.3c14.5-20.7,45.2-27.6,66.2-13.1c23.1,14.1,29,48.6,12.1,69.6c-15.5,21.4-49,24.8-68.6,7.6
          		c-16.2-13.1-21.4-36.2-13.8-55.5c2.4,1,7.2,3.1,9.7,4.1c-6.9,17.6,0.7,39.6,18.3,47.9c19,10.3,44.8-0.3,51.7-20.7
          		c7.6-19.3-4.5-43.1-24.5-48.3c-15.5-5.2-32.4,2.4-42.1,14.8C60.5,374.1,57.4,372,54.7,370.3z"/>
          </g>
          <g id="Frame17">
          	<path d="M-19.1,380.3c23.8-32.4,61-54.8,100.7-60.3c33.8-4.8,67.2,10.3,92.7,31.7c17.6,15.2,34.1,33.8,40,56.9
          		c-3.4,0.7-6.9,1-10.3,1.7c-4.5-17.9-17.2-31.7-30-44.5c-21.4-20-48.6-36.2-78.6-36.2c-33.8,0.3-65.2,16.5-89.6,39
          		c-7.2,7.2-15.2,14.5-18.6,24.5c2.8,11.7,11.4,21.4,19.3,30.3c22.8,23.4,52.7,42.1,85.8,43.8c30,1.4,58.3-12.4,81.7-30.3
          		c1.4,1.7,4.1,5.2,5.5,6.9c-24.8,19.3-55.5,33.8-87.9,32.1c-33.8-2.1-64.8-19.3-88.6-42.7c-13.8-13.8-26.5-31-28.3-51
          		C-23.6,381.7-20.5,380.7-19.1,380.3z"/>
          	<path d="M50.9,376.5c11.4-23.4,42.1-34.8,65.5-22.1c24.8,11.7,34.1,45.5,19,68.3c-13.8,23.4-48.3,29.6-69.3,12.8
          		c-17.2-12.4-23.1-35.9-16.5-55.5c2.4,0.7,7.2,2.4,10,3.4c-5.2,16.9,0.7,37.2,16.5,46.2c19,11.7,46.5,1.7,53.4-19
          		c8.6-20.7-5.9-46.2-27.6-50c-16.9-3.8-33.4,6.2-41.4,20.7C58.1,380,53.3,377.6,50.9,376.5z"/>
          </g>
          <g id="Frame18">
          	<path d="M66.7,323.1c32.1-9.7,66.9-0.7,94.1,17.6c23.1,16.2,45.5,36.9,53.8,64.8c-2.4,0.3-7.6,1.4-10.3,2.1
          		c-4.8-17.9-18.3-31.4-31.4-43.8c-22.1-19.7-50.3-35.5-81-34.1c-35.5,1.7-68.3,21-92.4,46.5c-6.6,7.6-17.6,17.9-9,28.3
          		c20,30.3,52.4,53.1,87.9,60.7c42.4,8.3,83.1-15.5,111.7-44.8c1.7,1.7,5.2,4.8,6.9,6.6c-22.8,23.4-51.7,42.7-84.1,48.3
          		c-31.7,5.2-63.8-5.9-89.6-23.8C3,436.8-16,418.2-23.9,393.8C-7,357.6,29.2,333.8,66.7,323.1z"/>
          	<path d="M90.2,349.3c25.9-3.4,51.4,17.9,52.7,43.8c2.8,25.5-18.3,50-43.4,51.4c-25.9,3.1-51.4-19-52.1-44.8
          		C45,375.1,65.4,351.4,90.2,349.3 M79.5,363.1c-10.7,4.8-19,14.8-21,26.2c-5.2,21,11.7,43.8,33.4,45.2c23.4,2.8,44.8-20.7,39.6-43.8
          		C128.1,367.6,100.5,352.7,79.5,363.1z"/>
          </g>
          <g id="Frame19">
          	<path d="M64.3,323.8c33.8-11,70.7-1.4,98.9,18.3c21.7,15.5,43.1,35.2,51,61.7c-3.4,0.7-6.9,1.4-10.3,2.1
          		c-4.8-16.9-17.2-29.6-29.6-41c-21-19-47.2-34.1-76.2-35.2C65,328.9,34,345.1,9.8,366.5c-9,8.6-17.9,17.6-23.4,29
          		c2.8,13.1,12.8,22.8,22.1,32.1c26.5,24.8,62.7,43.4,100,37.9c36.2-5.9,67.6-29.3,90-57.6c2.1,1.4,6.2,4.5,8.3,5.9
          		c-22.1,28.3-52.7,51.7-88.3,60c-33.4,7.9-68.3-3.1-96.2-22.1C1.9,437.5-17,419.6-25.3,395.5C-8.1,359.6,27.4,335.1,64.3,323.8z"/>
          	<path d="M76,353.1c22.8-10.3,52.7,1,62.4,24.1c11,22.8,0,53.1-23.1,63.1c-23.4,11.7-54.8,0-64.5-24.1
          		C40.2,392.7,52.3,362.4,76,353.1 M79.5,363.1c-11.4,5.2-20,16.5-21.4,29.3c-3.4,21.7,15.5,43.1,37.6,42.1
          		c22.4,0.3,41-22.4,36.2-44.5C127.8,366.9,100.2,352.4,79.5,363.1z"/>
          </g>
          <g id="Frame20">
          	<path d="M39.5,333.4c29.6-15.5,66.2-20,97.2-5.9c33.1,14.1,64.1,39.3,77.6,73.4c-17.9,33.1-50.3,58.3-85.8,70.3
          		c-36.9,12.8-77.6,1-108.2-21c-19-13.8-37.6-31-44.5-54.1C-12.6,367.9,13,347.6,39.5,333.4 M49.8,340.3
          		c-25.2,12.4-49,30.3-62.4,55.2c2.8,13.8,13.8,24.1,23.8,33.4c28.3,25.5,67.2,43.8,105.8,34.8c35.5-9,66.2-33.1,86.5-63.4
          		c-14.1-27.6-39.6-48.6-67.6-62.1C108.8,325.1,76.4,327.6,49.8,340.3z"/>
          	<path d="M89.8,349.3c26.9-3.8,53.4,19.7,53.1,46.9c1,25.5-21.7,49-47.2,48.6c-24.8,1-47.6-20.3-48.3-45.2
          		C45,375.1,65,351.4,89.8,349.3 M79.5,363.1c-11.7,5.2-20,16.5-21.4,29.3c-3.1,20.3,13.4,40.3,33.8,41.7c23.4,2.8,44.8-20.3,40-43.4
          		C128.4,367.2,100.5,352.4,79.5,363.1z"/>
          </g>
        </svg>
      </div>
    );
  }
};
