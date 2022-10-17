import React from "react";
import infosStyles from "./ContactInfos.module.css";

const ContactInfos = ({ contactUsData }) => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "80px 0",
      }}
    >
      <div
        className={`${infosStyles.infos} container`}
        style={{
          display: contactUsData?.isShow ? "block" : "none",
        }}
      >
        <div
          className="row row-cols-1 row-cols-md-3 justify-content-center"
          style={{ gap: "25px" }}
        >
          {contactUsData?.items?.map((data, index) => (
            <div
              className=""
              key={data?.id}
              style={{ display: data?.isShow ? "block" : "none" }}
            >
              <h1 className="fs-2 mb-3">{data?.title}</h1>
              <p>{data?.description}</p>
              <p style={{ color: "#625DF5" }} className="fw-bold">
                {data?.email}
              </p>
              {data?.address && <p>{data?.address}</p>}
              {data?.startDate && <p>{data?.startDate}</p>}
              {data?.endDate && <p>{data?.endDate}</p>}
              {data?.supportEmail && (
                <p>
                  <span className="fw-bold">Support email:</span>{" "}
                  <span className="fw-bold" style={{ color: "#625DF5" }}>
                    {data?.supportEmail}
                  </span>
                </p>
              )}
              {data?.technicalEmail && (
                <p>
                  <span className="fw-bold">Technical email:</span>{" "}
                  <span className="fw-bold" style={{ color: "#625DF5" }}>
                    {data?.technicalEmail}
                  </span>
                </p>
              )}
              {data?.salesEmail && (
                <p>
                  <span className="fw-bold">Sales email:</span>{" "}
                  <span className="fw-bold" style={{ color: "#625DF5" }}>
                    {data?.salesEmail}
                  </span>
                </p>
              )}
            </div>
          ))}
          {/* <div>
                <h1 className='fs-2 mb-3'>Office Address</h1>
                <p>PO Box 16122 Collins Street West Victoria 8007 Australia.</p>
                <p>Monday – Friday : 6 am to 8 pm EST</p>
                <p>Saturday : 6 am to 2 pm EST</p>
            </div>
            <div>
                <h1 className='fs-2 mb-3'>Get In Touch</h1>
                <p>`{"Have any questions? We'd love to hear from you."}`</p>
                <p>+1 (888) 456 7890</p>
                <p>+1 (444) 123 4560</p>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactInfos;
