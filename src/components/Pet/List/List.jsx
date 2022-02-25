import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { listPet } from "../../../api";

export const ListPet = (props) => {
  const [petList, setPetList] = useState([]);
  const downloadQRCode = (e) => {
    // Generate download with use canvas and stream
    const canvas = e.target.querySelector(".qr-code") || e.target;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${canvas.id}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  useEffect(() => listPet().then(({ data }) => setPetList(data)), []);
  return (
    <table className="list-items">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Type</th>
        <th>License</th>
        <th>QR</th>
      </tr>
      {petList.map((pet) => (
        <tr>
          <td>{pet.id}</td>
          <td>{pet.name}</td>
          <td>{pet.type}</td>
          <td>{pet.license}</td>
          <td>
            <a id="qr-download" onClick={downloadQRCode}>
              <QRCode
                id={`qr-${pet.id}`}
                className="qr-code"
                value={`${process.env.REACT_APP_API_URL}/pets/${pet.id}`}
                size={290}
                level={"H"}
                includeMargin={true}
              />
            </a>
          </td>
        </tr>
      ))}
    </table>
  );
};
