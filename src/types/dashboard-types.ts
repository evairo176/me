import React from "react";

export interface DASHBOARD_MENU_INTERFACE {
  name: string;
  url: string | any;
  icon: React.ReactNode;
}

export interface LANGUAGE_INTERFACE {
  id: string;
  name: string;
  code: string;
  status: boolean;
  createdAt: string;
}
