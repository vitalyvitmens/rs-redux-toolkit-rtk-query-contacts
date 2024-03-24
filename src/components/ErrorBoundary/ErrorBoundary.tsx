import { Component, ErrorInfo, ReactNode } from 'react'
import { Card } from 'react-bootstrap'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    alert(`Error message from getDerivedStateFromError: ${error.message}`)

    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    alert(
      `Error message from componentDidCatch: ${error.message}\nError info from componentDidCatch: ${errorInfo.componentStack}`
    )
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card style={{ margin: 'auto', paddingTop: '25%' }}>
          <Card.Title
            style={{
              color: '#FF0000',
              fontSize: '5rem',
              fontWeight: '800',
            }}
          >
            Что-то пошло не так!
          </Card.Title>
        </Card>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
