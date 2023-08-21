import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import 'react-vertical-timeline-component/style.min.css';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2015 - 2019'
        iconStyle={{background: "#F2D7D5", color: "#fff"}}
        icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
          Easwari Engineering College, Chennai </h3>
        <p> Electronics and Instrumentation Engineering </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
        date='2021 - 2022'
        iconStyle={{background: "#D0ECE7", color: "#fff"}}
        icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">
          Amazon - CMT Associate </h3>
        <p> Monitoring and ensuring the accuracy of the pricing
            analytics & operations team through Audits and
            process improvement activities & identifying
            emerging performance trends. </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
        date='2022 - 2023'
        iconStyle={{background: "#EBDEF0", color: "#fff"}}
        icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">
          Amazon - CMT Associate </h3>
        <p> Monitored and improved the front end performance
            of mapping tool and worked on updates.
            Created new features and functionality on the
            application using react, node.js and javascript.
            Troubleshoot and debugged codes for smooth 
            Execution and improved stability.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience