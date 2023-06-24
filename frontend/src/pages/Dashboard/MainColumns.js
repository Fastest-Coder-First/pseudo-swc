export const getColumns = () => {
    return [
      {
        Header: "date",
        accessor: "date",
      },
      {
        Header: "currency",
        accessor: "currency",
        disableFilters: true,
        
      },
      {
        Header: "amount",
        accessor: "amount",
      },
      {
        Header: "description",
        accessor: "description",
      },
      {
        Header: "status",
        accessor: "status",
      },
      {
        Header: "category",
        accessor: "category",
      },
      {
        Header: "type",
        accessor: "type",
      },
      {
        Header: "method",
        accessor: "method",
      },
      {
        Header: "card",
        accessor: "card",
      },
      {
        Header: "bank",
        accessor: "bank",
      },
      {
        Header: "merchant",
        accessor: "merchant",
      },
      {
        Header: "comments",
        accessor: "comments",
      },
      
    //   {
    //     Header: "Status",
    //     accessor: "status",
    //     Cell: ({ value }) => {
    //       if (value && value.profile) {
    //         return (
    //           <span className="text-green-600">
    //             {" "}
    //             Applied with {cv_map[value.profile]}{" "}
    //           </span>
    //         );
    //       } else {
    //         return <span className="text-gray-600"> Yet to apply </span>;
    //       }
    //     },
    //   },
    //   {
    //     Header: "Action",
    //     accessor: "action",
    //     Cell: ({ value }) => {
    //       return (
    //         <Action jobData={jobData} setJobData={setJobData} value={value} />
    //       );
    //     },
    //   },
    //   {
    //     Header: "View Details",
    //     accessor: "details",
    //     Cell: ({ value }) => {
    //       return (
    //         <Link
    //           to={`./view/${jobData[value]._id}/details`}
    //           className="text-blue-500 cursor-pointer hover:underline"
    //           state={jobData[value]}
    //         >
    //           {" "}
    //           Details{" "}
    //         </Link>
    //       );
    //     },
    //   },
    ];
  };