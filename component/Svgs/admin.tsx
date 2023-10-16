import React from "react";

const AdminSvg = ({ color }: { color: boolean }) => {
  return color ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 2H6C4.34 2 3 3.33 3 4.97V15.88C3 17.52 4.34 18.86 6 18.86H6.76C7.55 18.86 8.32 19.17 8.88 19.73L10.59 21.42C11.37 22.19 12.63 22.19 13.41 21.42L15.12 19.73C15.68 19.17 16.45 18.86 17.24 18.86H18C19.66 18.86 21 17.52 21 15.88V4.97C21 3.33 19.66 2 18 2ZM12 5.55C13.08 5.55 13.95 6.43 13.95 7.5C13.95 8.56 13.11 9.41 12.07 9.45C12.03 9.45 11.97 9.45 11.92 9.45C10.87 9.41 10.04 8.56 10.04 7.5C10.05 6.43 10.92 5.55 12 5.55ZM14.75 14.69C13.24 15.7 10.76 15.7 9.25 14.69C7.92 13.81 7.92 12.35 9.25 11.46C10.77 10.45 13.25 10.45 14.75 11.46C16.08 12.35 16.08 13.8 14.75 14.69Z"
        fill="#1D6FA0"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.34998 20.26C7.92998 19.84 7.35001 19.61 6.76001 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97C2.25 2.92 3.93 1.25 6 1.25H18C20.07 1.25 21.75 2.92 21.75 4.97V15.88C21.75 17.93 20.07 19.6 18 19.6H17.24C16.65 19.6 16.07 19.84 15.65 20.25L13.94 21.94C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.75 3.75 4.97V15.88C3.75 17.11 4.76 18.1 6 18.1H6.76001C7.75001 18.1 8.70997 18.5 9.40997 19.19L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.19C15.3 18.5 16.26 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.97C20.25 3.74 19.24 2.75 18 2.75H6Z"
        fill="#545764"
      />
      <path
        d="M12.0698 9.70005C12.0498 9.70005 12.0198 9.70005 11.9998 9.70005C11.9698 9.70005 11.9298 9.70005 11.8998 9.70005C10.4398 9.65005 9.2998 8.47005 9.2998 7.00005C9.2998 5.51005 10.5098 4.30005 11.9998 4.30005C13.4898 4.30005 14.6998 5.51005 14.6998 7.00005C14.6898 8.47005 13.5498 9.65005 12.0898 9.70005C12.0898 9.70005 12.0798 9.70005 12.0698 9.70005ZM11.9998 5.80005C11.3398 5.80005 10.7998 6.34005 10.7998 7.00005C10.7998 7.65005 11.3098 8.18005 11.9498 8.20005C11.9498 8.19005 12.0098 8.19005 12.0798 8.20005C12.7098 8.16005 13.1998 7.64005 13.1998 7.00005C13.1998 6.34005 12.6598 5.80005 11.9998 5.80005Z"
        fill="#545764"
      />
      <path
        d="M12 16.7001C10.86 16.7001 9.72002 16.4001 8.83002 15.8101C7.99002 15.2501 7.5 14.4401 7.5 13.5801C7.5 12.7201 7.98002 11.9001 8.83002 11.3401C10.61 10.1601 13.39 10.1601 15.16 11.3401C16 11.9001 16.49 12.7201 16.49 13.5701C16.49 14.4301 16.01 15.2401 15.16 15.8101C14.28 16.4101 13.14 16.7001 12 16.7001ZM9.65997 12.5901C9.22997 12.8801 9 13.2301 9 13.5801C9 13.9301 9.23997 14.2801 9.65997 14.5701C10.93 15.4201 13.06 15.4201 14.33 14.5701C14.76 14.2801 15 13.9301 14.99 13.5801C14.99 13.2301 14.75 12.8801 14.33 12.5901C13.07 11.7401 10.93 11.7401 9.65997 12.5901Z"
        fill="#545764"
      />
    </svg>
  );
};

export default AdminSvg;
