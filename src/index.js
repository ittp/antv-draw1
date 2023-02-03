import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FundFlowGraph } from "@ant-design/graphs";

const DemoFundFlowGraph = () => {
  const data = {
    nodes: [
      {
        id: "1",
        value: {
          text: "10.10.0.1",
          // 建议使用 bae64 数据
          icon:
            "https://gw.alipayobjects.com/zos/antfincdn/28B4PgocL4/bbd3e7ef-6b5e-4034-893d-1b5073ad9aa4.png"
        }
      },
      {
        id: "2",
        value: { text: "10.10.1.1" }
      },
      {
        id: "3",
        value: { text: "10.10.2.1" }
      },
      {
        id: "4",
        value: { text: "10.10.3.1" }
      },
      {
        id: "5",
        value: { text: "10.10.4.1" }
      },
      {
        id: "6",
        value: { text: "10.10.5.1" }
      },
      {
        id: "7",
        value: { text: "10.10.6.1" }
      },
      {
        id: "8",
        value: { text: "Company8" }
      },
      {
        id: "9",
        value: { text: "Company9" }
      }
    ],
    edges: [
      {
        source: "1",
        target: "1",
        value: { text: "100,000 Yuan", subText: "2019-08-03", extraKey: "A" }
      },
      {
        source: "1",
        target: "1",
        value: { text: "100,000 Yuan", subText: "2019-08-03", extraKey: "B" }
      },
      {
        source: "2",
        target: "5",
        value: { text: "100,000 Yuan", subText: "2019-08-03" }
      },
      {
        source: "5",
        target: "6",
        value: { text: "100,000 Yuan", subText: "2019-08-03" }
      },
      {
        source: "3",
        target: "4",
        value: { text: "100,000 Yuan", subText: "2019-08-03" }
      },
      {
        source: "4",
        target: "7",
        value: { text: "100,000 Yuan", subText: "2019-08-03" }
      },
      {
        source: "1",
        target: "8",
        value: { text: "100,000 Yuan", subText: "2019-08-03" }
      },
      {
        source: "1",
        target: "9",
        value: { text: "100,000 Yuan", subText: "2019-08-03" }
      }
    ]
  };
  const colorMap = {
    A: "#FFAA15",
    B: "#72CC4A"
  };
  const config = {
    data,
    edgeCfg: {
      // type: 'line',
      endArrow: (edge) => {
        const { value } = edge;
        return {
          fill: colorMap[value.extraKey] || "#40a9ff"
        };
      },
      style: (edge) => {
        const { value } = edge;
        return {
          stroke: colorMap[value.extraKey] || "#40a9ff"
        };
      },
      edgeStateStyles: {
        hover: {
          stroke: "#1890ff",
          lineWidth: 2,
          endArrow: {
            fill: "#1890ff"
          }
        }
      }
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: "right",
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id)
      };
    }
  };

  return <FundFlowGraph {...config} />;
};

ReactDOM.render(<DemoFundFlowGraph />, document.getElementById("container"));
