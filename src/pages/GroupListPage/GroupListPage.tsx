import { GroupContactsCard } from 'src/components/GroupContactsCard/GroupContactsCard'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useGetGroupContactsQuery } from 'src/redux/groups'

export const GroupListPage = () => {
  const { groups, isLoadingGroups } = useGetGroupContactsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      groups: data?.groups,
      isLoadingGroups: data?.isLoading,
    }),
  })

  if (isLoadingGroups) {
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
