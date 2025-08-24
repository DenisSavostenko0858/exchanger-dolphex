export interface ReviewsItem {
  id: number;
  userEmail?: string;
  userName: string;
  title: string;
  date?: string;
}
// В дальнейшем реализовать парсер из Server > Database

export const reviewsData: ReviewsItem[] = [
  {
    id: 1,
    userName: "Иван",
    title: "Отличный сервис",
    date: "23.06"
  },
  {
    id: 2,
    userName: "Иван",
    title: "Отличный сервис",
    date: "23.06"
  },
    {
    id: 3,
    userEmail: "user@gmail.com",
    userName: "Иван",
    title: "Отличный сервис",
    date: "23.06"
  },
    {
    id: 4,
    userName: "Иван",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse itaque quisquam cupiditate aliquam corporis modi commodi. Itaque odit minima aperiam voluptate rem officia modi, accusantium nam amet ipsam accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse itaque quisquam cupiditate aliquam corporis modi commodi. Itaque odit minima aperiam voluptate rem officia modi, accusantium nam amet ipsam accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse itaque quisquam cupiditate aliquam corporis modi commodi. Itaque odit minima aperiam voluptate rem officia modi, accusantium nam amet ipsam accusamus.",
    date: "23.06"
  },
    {
    id: 5,
    userName: "Иван",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse itaque quisquam cupiditate aliquam corporis modi commodi. Itaque odit minima aperiam voluptate rem officia modi, accusantium nam amet ipsam accusamus.",
    date: "23.06"
  },
    {
    id: 6,
    userName: "Иван",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse itaque quisquam cupiditate aliquam corporis modi commodi. Itaque odit minima aperiam voluptate rem officia modi, accusantium nam amet ipsam accusamus.",
    date: "23.06"
  },
    {
    id: 7,
    userName: "Иван",
    title: "Отличный сервис",
    date: "23.06"
  },
    {
    id: 8,
    userName: "Иван",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse itaque quisquam cupiditate aliquam corporis modi commodi. Itaque odit minima aperiam voluptate rem officia modi, accusantium nam amet ipsam accusamus.",
    date: "23.06"
  },
];