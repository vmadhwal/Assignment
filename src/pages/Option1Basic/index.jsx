import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

const Option1BasicPage = () => {
  const sideBarMenu = [
    { label: "Users" },
    { label: "Contacts" },
    { label: "Chat" },
    { label: "Pages" },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[319px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
              <div className="md:h-[169px] sm:h-[226px] h-[282px] relative w-full">
                <div className="flex flex-col gap-9 h-full items-center justify-start m-auto w-full">
                  <div className="bg-gray-900_01 flex flex-col items-end justify-start p-6 sm:px-5 w-full">
                    <Img
                      className="h-7 mr-1.5 w-7"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Img
                      className="h-[52px] mx-auto object-cover w-full"
                      src="images/img_highlightedrectangle.png"
                      alt="highlightedrect"
                    />
                    <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start ml-[25px] mt-[-41.56px] w-[10%] z-[1]">
                      <Img
                        className="h-[30px] w-[29px]"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="h-7 w-7"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[21%] flex flex-col items-center justify-start left-[9%]">
                  <Text
                    className="text-blue_gray-700 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    CUSTOM
                  </Text>
                </div>
              </div>
              <Text
                className="ml-[30px] mr-[94px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtPoppinsExtraBold30"
              >
                DASHBOARD
              </Text>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    flexDirection: "column",
                    paddingLeft: "69px",
                    paddingRight: "69px",
                    [`&:hover, &.ps-active`]: {
                      color: "#888c9f",
                      fontWeight: "400 !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[971px] mt-[69px] w-full"
              >
                <div className="flex flex-col md:gap-10 gap-[109px] items-center justify-start w-full">
                  <MenuItem>
                    <div className="flex items-start justify-start md:px-10 sm:px-5">
                      <Text className="text-[13px] text-white-A700">
                        Dashboard
                      </Text>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex items-start justify-start md:px-10 sm:px-5">
                      <Text className="text-[13px] text-white-A700">
                        Applications
                      </Text>
                    </div>
                  </MenuItem>
                </div>
                <Img
                  className="h-[187px]"
                  src="images/img_arrows.svg"
                  alt="arrows"
                />
                <div className="flex flex-col gap-[31.96px] items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
                <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                  <Img
                    className="h-24"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Img
                    className="h-[386px]"
                    src="images/img_iconsfaded.svg"
                    alt="iconsfaded"
                  />
                </div>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-col gap-[5px] justify-end pr-[13px] py-[13px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[1020px] mr-[22px] mt-[3px] w-[30%] md:w-full">
                    <Img
                      className="h-7 md:mt-0 mt-1.5"
                      src="images/img_icons.svg"
                      alt="icons"
                    />
                    <Text
                      className="md:ml-[0] ml-[45px] md:mt-0 mt-2 text-[11px] text-blue_gray-300"
                      size="txtPoppinsMedium11"
                    >
                      Nick Thomas
                    </Text>
                    <Button
                      className="cursor-pointer h-[42px] leading-[normal] md:ml-[0] ml-[29px] text-[17px] text-center w-[43px]"
                      shape="round"
                      color="teal_50"
                    >
                      N
                    </Button>
                  </div>
                  <Line className="bg-blue_gray-50_01 h-px mr-[239px] w-[84%]" />
                </div>
                <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between p-2.5 shadow-bs w-full">
                  <div className="flex md:flex-1 flex-row items-end justify-between mb-1 md:ml-[0] ml-[25px] w-[19%] md:w-full">
                    <Text
                      className="my-2 text-[13px] text-gray-800"
                      size="txtPoppinsMedium13"
                    >
                      Dashboard
                    </Text>
                    <Line className="bg-blue_gray-50_02 h-[26px] mb-[3px] mt-2 w-px" />
                    <Text
                      className="bg-orange-50 h-[38px] justify-center pb-[11px] pl-3 sm:pr-5 pr-6 pt-[7px] rounded text-[13px] text-amber-A700 w-[95px]"
                      size="txtPoppinsMedium13AmberA700"
                    >
                      Add New
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start mr-[19px] md:mt-0 my-0.5 w-[29%] md:w-full">
                    <div className="h-[33px] md:h-[35px] sm:mt-0 mt-0.5 relative w-[17%] sm:w-full">
                      <Text
                        className="ml-2.5 my-auto text-[13px] text-blue_gray-300"
                        size="txtPoppinsMedium13Bluegray300"
                      >
                        Today
                      </Text>
                      <Button
                        className="absolute cursor-pointer font-medium h-full inset-[0] justify-center leading-[normal] m-auto min-w-[71px] text-[13px] text-center"
                        shape="round"
                      >
                        Today
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px] sm:mt-0 mt-[7px]">
                      <Text
                        className="text-[13px] text-blue_gray-300"
                        size="txtPoppinsMedium13Bluegray300"
                      >
                        Month{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[51px] sm:mt-0 mt-[7px]">
                      <Text
                        className="text-[13px] text-blue_gray-300"
                        size="txtPoppinsMedium13Bluegray300"
                      >
                        Year
                      </Text>
                    </div>
                    <Text
                      className="bg-gray-100 h-[38px] justify-center sm:ml-[0] ml-[52px] pb-[11px] pl-4 sm:pr-5 pr-7 pt-[7px] rounded text-[13px] text-blue_gray-300_01 w-[93px]"
                      size="txtPoppinsMedium13Bluegray30001"
                    >
                      Actions
                    </Text>
                    <Img
                      className="h-9 ml-3.5 sm:ml-[0] w-9"
                      src="images/img_fileplusicon.svg"
                      alt="fileplusicon"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-7 sm:pr-5 pr-[22px] w-[91%] md:w-full">
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start p-[18px] rounded-[12px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start mb-5 w-[63%] md:w-full">
                      <Img
                        className="h-[81px]"
                        src="images/img_thumbsup_blue_gray_200.svg"
                        alt="thumbsup_One"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-lg"
                        size="txtPoppinsSemiBold18"
                      >
                        <>
                          SaaS
                          <br />
                          Application
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[60px] p-[15px] rounded-[12px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start mb-[33px] w-[63%] md:w-full">
                      <Img
                        className="h-[81px]"
                        src="images/img_grid_blue_gray_200.svg"
                        alt="grid_One"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        <>
                          Main
                          <br />
                          Categories
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-teal-300 flex flex-col items-center justify-start md:ml-[0] ml-[91px] p-6 sm:px-5 rounded-[12px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-[22px] justify-start w-[66%] md:w-full">
                      <Img
                        className="h-[71px] mr-2"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Text
                        className="leading-[19.00px] md:ml-[0] ml-[17px] text-center text-white-A700 text-xl"
                        size="txtPoppinsSemiBold20WhiteA700"
                      >
                        <>
                          Video
                          <br />
                          Tutorials
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-end justify-start md:ml-[0] ml-[66px] p-[21px] sm:px-5 rounded-[12px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-2.5 justify-start mb-2.5 mr-3.5 w-[73%] md:w-full">
                      <Img
                        className="h-[86px] md:ml-[0] ml-[9px]"
                        src="images/img_equalizer.svg"
                        alt="equalizer"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        <>
                          Sales
                          <br />
                          Statistics
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[54px] p-[34px] sm:px-5 rounded-[12px] w-[16%] md:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-[67%] md:w-full">
                      <Img
                        className="h-[75px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        <>
                          ARC
                          <br />
                          Security
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[34px] w-[89%] md:w-full">
                  <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start pb-[100px] rounded-[12px] w-[48%] md:w-full">
                        <div className="bg-red-A200 flex flex-col items-center justify-start pt-[22px] rounded-[12px] w-full">
                          <div className="flex flex-col gap-12 items-center justify-start w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-[91%] md:w-full">
                              <Text
                                className="mt-[3px] text-[17px] text-white-A700"
                                size="txtPoppinsSemiBold17"
                              >
                                Categories
                              </Text>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[85px] rounded-md"
                                rightIcon={
                                  <div className="mt-[5px] mb-2 ml-[13px] outline-white-A700 outline-[0.5px] outline">
                                    <Img
                                      src="images/img_arrow.svg"
                                      alt="Arrow"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="white_A700_65"
                              >
                                <div className="font-semibold leading-[normal] text-[11px] text-left">
                                  Export
                                </div>
                              </Button>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[141px] items-center justify-start py-1.5 w-full"
                              style={{
                                backgroundImage: "url('images/img_group8.svg')",
                              }}
                            >
                              <Img
                                className="h-[65px] mb-16"
                                src="images/img_vector6.svg"
                                alt="vectorSix"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col gap-[21px] items-start justify-end p-5 rounded-[12px] w-[51%] md:w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[9px] mt-[5px] w-[97%] md:w-full">
                          <Text
                            className="text-[17px] text-gray-900_02"
                            size="txtPoppinsSemiBold17Gray90002"
                          >
                            Sales Progress
                          </Text>
                          <Img
                            className="h-1.5"
                            src="images/img_grid_blue_gray_200_6x17.svg"
                            alt="grid_Two"
                          />
                        </div>
                        <List
                          className="flex flex-col gap-[29px] ml-2.5 md:ml-[0] w-[33%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="deep_purple_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_thumbsup_deep_purple_a200.svg"
                                  alt="thumbsup"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="orange_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="cyan_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_maximize.svg"
                                  alt="maximize"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="pink_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_settings_red_a200.svg"
                                  alt="settings"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 rounded-[12px] w-full">
                      <div className="flex flex-col gap-[26px] items-center justify-start mb-0.5 w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                            <div className="flex flex-col gap-1.5 items-start justify-start">
                              <Text
                                className="text-gray-900_02 text-lg"
                                size="txtPoppinsMedium18"
                              >
                                New Arrivals
                              </Text>
                              <Text
                                className="text-blue_gray-200 text-xs"
                                size="txtPoppinsMedium12"
                              >
                                More than 400+ new members
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[14%]">
                              <Text
                                className="text-blue_gray-200 text-xs"
                                size="txtPoppinsSemiBold12"
                              >
                                Month
                              </Text>
                              <Text
                                className="text-blue_gray-200 text-xs"
                                size="txtPoppinsSemiBold12"
                              >
                                Week
                              </Text>
                              <Button
                                className="cursor-pointer font-semibold leading-[normal] min-w-[53px] rounded-md text-center text-xs"
                                shape="round"
                                color="blue_gray_700_02"
                              >
                                Day
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                          <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[19%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                <Button
                                  className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                  shape="round"
                                  size="md"
                                >
                                  <Img
                                    className="h-7"
                                    src="images/img_184plurk.svg"
                                    alt="184plurk"
                                  />
                                </Button>
                                <div className="flex flex-col items-center justify-start mt-1">
                                  <Text
                                    className="text-blue_gray-700_02 text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    Sant Outstanding
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    FTP: bprow@bnc.cc
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                <Button
                                  className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                  shape="round"
                                  size="md"
                                >
                                  <Img
                                    className="h-7"
                                    src="images/img_186telegram.svg"
                                    alt="186telegram"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start mt-1">
                                  <Text
                                    className="text-blue_gray-700_02 text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    Telegram Application
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    FTP: bprow@bnc.cc
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                <Button
                                  className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                  shape="round"
                                  size="md"
                                >
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_194puzzle.svg"
                                    alt="194puzzle"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start mt-1">
                                  <Text
                                    className="text-blue_gray-700_02 text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    Cisco Management
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    FTP: bprow@bnc.cc
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                              <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                                <Button
                                  className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                  shape="round"
                                  size="md"
                                >
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_182bebo.svg"
                                    alt="182bebo"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start mt-[5px]">
                                  <Text
                                    className="text-blue_gray-700_02 text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    HR Management
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    FTP: bprow@bnc.cc
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                <Button
                                  className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                  shape="round"
                                  size="md"
                                >
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_group1.svg"
                                    alt="groupOne"
                                  />
                                </Button>
                                <div className="flex flex-col items-start justify-start mt-1">
                                  <Text
                                    className="text-blue_gray-700_02 text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    KTR Mobile Application
                                  </Text>
                                  <Text
                                    className="mt-1 text-[13px] text-blue_gray-200"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    FTP: bprow@bnc.cc
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-9 items-end justify-start md:ml-[0] ml-[630px] w-[7%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                              <div className="flex flex-col items-end justify-start w-full">
                                <Text
                                  className="text-blue_gray-700_02 text-right text-sm"
                                  size="txtPoppinsSemiBold14"
                                >
                                  $2,000,000
                                </Text>
                                <Text
                                  className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                  size="txtPoppinsMedium13Bluegray200"
                                >
                                  Paid
                                </Text>
                              </div>
                              <div className="flex flex-col items-end justify-start mt-[25px] w-full">
                                <Text
                                  className="text-blue_gray-700_02 text-right text-sm"
                                  size="txtPoppinsSemiBold14"
                                >
                                  $4,600,000
                                </Text>
                                <Text
                                  className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                  size="txtPoppinsMedium13Bluegray200"
                                >
                                  Paid
                                </Text>
                              </div>
                              <div className="flex flex-col items-end justify-start ml-3 md:ml-[0] mt-[35px]">
                                <Text
                                  className="text-blue_gray-700_02 text-right text-sm"
                                  size="txtPoppinsSemiBold14"
                                >
                                  $560,000
                                </Text>
                                <Text
                                  className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                  size="txtPoppinsMedium13Bluegray200"
                                >
                                  Paid
                                </Text>
                              </div>
                              <div className="flex flex-col items-end justify-start md:ml-[0] ml-[23px] mt-[35px]">
                                <Text
                                  className="text-blue_gray-700_02 text-right text-sm"
                                  size="txtPoppinsSemiBold14"
                                >
                                  $57,000
                                </Text>
                                <Text
                                  className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                  size="txtPoppinsMedium13Bluegray200"
                                >
                                  Paid
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-start w-full">
                              <Text
                                className="text-blue_gray-700_02 text-right text-sm"
                                size="txtPoppinsSemiBold14"
                              >
                                $45,200,000
                              </Text>
                              <Text
                                className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                size="txtPoppinsMedium13Bluegray200"
                              >
                                Paid
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-[54px] items-end justify-start md:ml-[0] ml-[59px] w-[7%] md:w-full">
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[74px] rounded-md text-[11px] text-center"
                              shape="round"
                              color="deep_purple_50"
                              size="xs"
                            >
                              Approved
                            </Button>
                            <div className="flex flex-col gap-[54px] items-start justify-start w-full">
                              <Text
                                className="bg-orange-50 h-[26px] justify-center pb-0.5 pt-1.5 px-[9px] rounded-md text-[11px] text-amber-A700 w-20"
                                size="txtPoppinsMedium11AmberA700"
                              >
                                In Progress
                              </Text>
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[65px] ml-4 md:ml-[0] rounded-md text-[11px] text-center"
                                shape="round"
                                color="cyan_50"
                                size="xs"
                              >
                                Success
                              </Button>
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[67px] ml-3.5 md:ml-[0] rounded-md text-[11px] text-center"
                                shape="round"
                                color="pink_50"
                                size="xs"
                              >
                                Rejected
                              </Button>
                              <Text
                                className="bg-orange-50 h-[26px] justify-center pb-0.5 pt-1.5 px-[9px] rounded-md text-[11px] text-amber-A700 w-[81px]"
                                size="txtPoppinsMedium11AmberA700"
                              >
                                In Progress
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[352px] md:ml-[0] ml-[58px]"
                            src="images/img_col5.svg"
                            alt="colFive"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[29px] items-center justify-start p-6 sm:px-5 rounded-[12px] w-[89%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-gray-900_02 text-lg"
                        size="txtPoppinsMedium18"
                      >
                        Recent Stats
                      </Text>
                      <Text
                        className="text-blue_gray-400_01 text-xs"
                        size="txtPoppinsMedium12Bluegray40001"
                      >
                        More than 400+ new members
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[14%]">
                      <Text
                        className="text-blue_gray-200 text-xs"
                        size="txtPoppinsSemiBold12"
                      >
                        Month
                      </Text>
                      <Text
                        className="text-blue_gray-200 text-xs"
                        size="txtPoppinsSemiBold12"
                      >
                        Week
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[53px] rounded-[12px] text-center text-xs"
                        color="blue_gray_700_02"
                      >
                        Day
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-0.5 w-[92%] md:w-full">
                  <div className="flex flex-col gap-[5px] justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
                      <div className="flex flex-col gap-[41px] items-start justify-start">
                        <Text
                          className="text-blue_gray-200 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          150
                        </Text>
                        <Text
                          className="h-[18px] text-blue_gray-200 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          120
                        </Text>
                        <Text
                          className="text-blue_gray-200 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          90
                        </Text>
                        <Text
                          className="text-blue_gray-200 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          60
                        </Text>
                        <Text
                          className="text-blue_gray-200 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          30
                        </Text>
                        <Text
                          className="text-blue_gray-200 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          0
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[300px] items-center justify-start pt-[13px] px-[13px] w-[94%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group9.svg')",
                        }}
                      >
                        <Img
                          className="h-[287px]"
                          src="images/img_columns.svg"
                          alt="columns"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[170px] w-4/5 md:w-full">
                      <Text
                        className="text-blue_gray-200 text-center text-xs"
                        size="txtPoppinsMedium12"
                      >
                        1 Aug
                      </Text>
                      <Text
                        className="ml-36 md:ml-[0] text-blue_gray-200 text-center text-xs"
                        size="txtPoppinsMedium12"
                      >
                        8 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[138px] text-blue_gray-200 text-center text-xs"
                        size="txtPoppinsMedium12"
                      >
                        151 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[134px] text-blue_gray-200 text-center text-xs"
                        size="txtPoppinsMedium12"
                      >
                        22 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[135px] text-blue_gray-200 text-center text-xs"
                        size="txtPoppinsMedium12"
                      >
                        29 Aug
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[137px] text-blue_gray-200 text-center text-xs"
                        size="txtPoppinsMedium12"
                      >
                        5 Sep
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Option1BasicPage;
