import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'src/routes/RoutePaths'
import { addToFavorites } from 'src/redux/favorites'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Colors } from 'src/constants/colors'

export const AddToFavorites: React.FC<{
  contact: ContactDto
}> = ({ contact }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const favorites = useAppSelector((state) => state.favorites)

  let isInFavorites = favorites.favorites?.find(
    (transaction) => transaction.id === contact.id
  )
    ? true
    : false

  const handleClick = () => {
    if (isInFavorites) {
      navigate(RoutePaths.Favorit)
    } else {
      dispatch(addToFavorites(contact))
    }
  }

  return (
    <div onClick={handleClick}>
      <svg
        className="heart"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill={`${isInFavorites ? Colors.red : Colors.bisque}`}
        height="35px"
        width="35px"
        viewBox="0 0 22 22"
        stroke={Colors.red}
      >
        <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
      </svg>
    </div>
  )
}
