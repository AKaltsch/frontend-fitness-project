import { Line } from "react-chartjs-2";

function Graph({ array, label }) {
  const labelsArray = [...new Array(array.length).keys()];

  const data = {
    labels: labelsArray,
    datasets: [
      {
        label: label,
        data: array,
        borderColor: ["rgba(54, 162, 235 ,0.2)"],
        backgroundColor: ["rgba(54, 162, 235 ,0.2)"],
        pointBackgroundColor: ["rgba(54, 162, 235 ,0.2)"],
        pointBorderColor: ["rgba(54, 162, 235 ,0.2)"],
      },
    ],
  };

    const options = {
      title: {
        display: true,
        text: "Line Chart"
      },
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             min: 0,
  //             max: 6,
  //             stepSize: 1
  //           },
  //         },
  //       ],
  //     },
    };

  return <Line data={data} />; //options={options}
}

export default Graph;
