import React from "react";
import { Button, Result } from "antd";

type State = { hasError: boolean };

//TODO: log error to monitoring service using componentDidCatch

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  reset = () => this.setState({ hasError: false });
  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="error"
          title="Something went wrong"
          subTitle="An unexpected error occurred."
          extra={[
            <Button type="primary" onClick={this.reset} key="reload">
              Try again
            </Button>,
          ]}
        />
      );
    }
    return this.props.children;
  }
}
