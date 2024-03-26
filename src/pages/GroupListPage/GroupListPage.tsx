import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Col, Row } from 'react-bootstrap'
import { useGetGroupsContactsQuery } from 'src/redux/groupContactsReducer'

export const GroupListPage = () => {
  const { data: groups } = useGetGroupsContactsQuery()

  return (
    <Row xxl={4}>
      {groups?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
}
