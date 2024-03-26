import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useGetGroupContactsQuery } from 'src/redux/groupContactsReducer'

export const GroupListPage = () => {
  const { data: groups, isLoading } = useGetGroupContactsQuery()

  if (isLoading) {
    return <Spinner animation="border" />
  } else if (!groups) {
    return null
  }

  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
}
