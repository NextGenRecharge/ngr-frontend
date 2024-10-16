import React from "react";
import { useForm } from "react-hook-form";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Dth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedOperator, setSelectedOperator] = React.useState("Select Operator");

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleMenuClick = (e) => {
    setSelectedOperator(e.key); // Set the selected operator
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Airtel">Airtel</Menu.Item>
      <Menu.Item key="JIO">JIO TV</Menu.Item>
      <Menu.Item key="Tata Sky">Tata Sky</Menu.Item>
      <Menu.Item key="Dish TV">Dish TV</Menu.Item>
      <Menu.Item key="Sun Direct">Sun Direct</Menu.Item>
    </Menu>
  );

  return (
    <div className="recharge-container p-6 w-full h-full bg-white rounded-lg shadow-md">
      <div className="mb-4 text-start font-extrabold">
        <h1>DTH Recharge Online</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {/* Dropdown for selecting operator */}
        <div className="h-[45px]">
        <Dropdown overlay={menu} className="w-full">
            <div className="flex items-center border border-[#ccc] rounded-lg px-4 py-2 cursor-pointer">
              <span
                className={`flex-grow text-left ${
                  selectedOperator === "Select Operator" ? "text-gray-400 font-light" : ""
                }`}
              >
                {selectedOperator}
              </span>
              <DownOutlined />
            </div>
          </Dropdown>
          {errors.operator && (
            <p className="text-sm text-red-600">{errors.operator.message}</p>
          )}
        </div>

        {/* Input for VC Number */}
        <div className="h-[45px]">
          <input
            id="vcnumber"
            name="vcnumber"
            placeholder="Enter VC Number"
            {...register("vcnumber", { required: "VC Number is required" })}
            className="w-full border border-[#ccc] px-4 rounded-lg py-2 outline-none"
          />
          {errors.vcnumber && (
            <p className="text-sm text-red-600">{errors.vcnumber.message}</p>
          )}
        </div>

        {/* Input for Amount */}
        <div className="h-[45px]">
          <input
            id="amount"
            name="amount"
            placeholder="Amount"
            {...register("amount", { required: "Amount is required", min: 1 })}
            className="w-full border border-[#ccc] px-4 rounded-lg py-2 outline-none"
          />
          {errors.amount && (
            <p className="text-sm text-red-600">{errors.amount.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="h-[45px] w-full p-2 bg-primary text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dth;
