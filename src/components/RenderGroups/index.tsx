import {useGroup} from "../../providers/Groups"

import {Button, IconButton} from "../Button"

import {Card, Section} from "./style"

export const RenderGroups = ({
    groups,
    groupInput,
    input,
    page,
    setPage,
    bol = true
}) => {
    const {loadGroup} = useGroup()

    const groupConect = (id) => {
        loadGroup(id)
    }

    return (
        <Section>
            {groupInput.length > 0 && input !== ""
                ? groupInput.map((group, index) => (
                      <Card className="Card" key={index}>
                          <div className="upPart">
                              <h3 className="group-name">{group.name}</h3>
                              <p className="group-description">
                                  {group.description}
                              </p>
                          </div>
                          <div className="downPart">
                              <div className="category-group-card">
                                  <p className="category-group-card-p">
                                      {group.category}
                                  </p>
                              </div>
                              {group.users_on_group.length > 1 ||
                              group.users_on_group.length === 0 ? (
                                  <div className="user-on-group-card">
                                      {group.users_on_group.length} Membros
                                  </div>
                              ) : (
                                  <div className="user-on-group-card">
                                      {group.users_on_group.length} Membro
                                  </div>
                              )}

                              <IconButton
                                  onClick={() => {
                                      groupConect(group.id)
                                  }}
                                  className="icon-button-group"
                                  arrowUp
                                  primaryColor
                              />
                          </div>
                      </Card>
                  ))
                : groups.map((group, index) => (
                      <Card key={index}>
                          <div className="upPart">
                              <h3 className="group-name">{group.name}</h3>
                              <p className="group-description">
                                  {group.description}
                              </p>
                          </div>
                          <div className="downPart">
                              <div className="category-group-card">
                                  {" "}
                                  <p className="category-group-card-p">
                                      {group.category}
                                  </p>
                              </div>
                              {group.users_on_group.length > 1 ||
                              group.users_on_group.length === 0 ? (
                                  <div className="user-on-group-card">
                                      {group.users_on_group.length} Membros
                                  </div>
                              ) : (
                                  <div className="user-on-group-card">
                                      {group.users_on_group.length} Membro
                                  </div>
                              )}

                              <IconButton
                                  onClick={() => {
                                      groupConect(group.id)
                                  }}
                                  arrowUp
                                  primaryColor
                                  card
                              />
                          </div>
                      </Card>
                  ))}
            {bol ? (
                <Button
                    className="section__render_full"
                    onClick={() => setPage(page + 1)}
                >
                    Ver mais
                </Button>
            ) : null}
        </Section>
    )
}
