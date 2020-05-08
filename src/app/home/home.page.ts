import { Component } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
const Users = gql`
  query {
    users {
      id
      name
    }
  }
`;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  data: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}
  ngOnInit() {
    this.apollo
      .watchQuery({
        query: Users,
      })
      .valueChanges.subscribe((result: any) => {
        console.log("result", result.data);
        this.data = result.data.users;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
